import React from 'react'

const UserInquiry = () => {
    const cardStyle = {
        width:800,
        height:76,
        marginTop: 50,

        border:'1px solid black',
        borderRadius:'10px',
        fontSize:24,
        display:'grid',
        gridTemplateColumns: '1fr 1fr',
        alignContent:'center'
    }



    return (
        <div>
            <div style={cardStyle}>
                <div style={{textAlign:'left', marginLeft:30}}>
                    Your Inquiries
                </div>
            </div>
            <br/>

        </div>
    )
}

export default UserInquiry
