import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch,connect} from 'react-redux';
import { setFocus } from '../../redux/actions/adminActions';


const InquiryCard = (props) => {

    // styling elements
    const CardStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems:'center',
        borderBottom: '1px solid black'
    }

    // setting focus for chat box
    const onClick = () => {
        console.log(props.inquiry.id)
       
    }

    return (
        <div style={{width: 800,marginTop: 15,border: '1px solid black',borderRadius:10}}>
            <div style={CardStyle}>
                {/* this is the contents of each card listing */}
                <div style={{textAlign:'left',marginLeft:25}}>
                    <b>{props.inquiry.name}</b>
                </div>
                <div style={{display:'grid',justifyItems:'right'}}>
                    <Button style={{margin:10,marginRight:25}} onClick={() => props.setFocus(props.inquiry.id)}>Reply to Inquiry</Button>
                </div>
            </div>

            <div style={{textAlign:'left',marginLeft:25,marginTop:20}}>
                <span style={{opacity:'75%'}}>{props.inquiry.date}</span> 
                <span> ◦ {props.inquiry.message[0][1]}</span>
            </div>
            <br/>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFocus: (id) => dispatch(setFocus(id))
    }
}
export default connect(null, mapDispatchToProps)(InquiryCard)
