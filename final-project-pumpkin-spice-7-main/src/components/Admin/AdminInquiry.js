import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import AdminCard from './AdminCard';
import Chat from './Chat'
import InquiryCard from './InquiryCard';


const AdminInquiry = (props) => {
    let { id } = useParams();

    const inquiryStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginTop:50,
        gridGap:50
    }

    const cardStyle = {
        width: 800,
        height: 76,
        marginTop: 50,

        border: '1px solid black',
        borderRadius: '10px',
        fontSize: 24,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignContent: 'center',
    }

    return (
        <div style={inquiryStyle}>
            <div>
                <AdminCard item={props.item[id]} INQUIRY_MODE={true} />
                <div style={cardStyle}>
                    <div style={{ textAlign: 'left', marginLeft: 30 }}>
                        Your Inquries
                    </div>
                    <div>
                        {/* ADD A SEARCH BUTTON */}
                    </div>
                </div>
                {props.item[id].inquiries.map((inquiry) => <InquiryCard key={inquiry.id} inquiry={inquiry}/>)}

            </div>

            <Chat listingId={id} />
        </div>
    )
}

const mapStateToProps = (state) => {
    // let { id } = useParams();
    return {
        item: state.adminReducer.listings
    }
}

export default connect(mapStateToProps)(AdminInquiry)
