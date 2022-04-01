import React from 'react'
import { Button } from 'react-bootstrap';
import {  useNavigate } from "react-router-dom";


const AdminCard = ({ item, INQUIRY_MODE = false }) => {

    // styling elements
    const CardStyle = {
        width: 800,
        height: 200,
        marginTop: 15,

        border: '1px solid black',
        borderRadius: '10px',
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
    }

    const infoStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr .75fr',
    }

    // navigation with the buttons
    const navigate =  useNavigate();

    const onClickInquiry = () => {
        console.log(`/admin/inquiry/${item.id}`)
        navigate(`/admin/inquiry/${item.id}`,{id: item.id})
    }

    // on click event to redirect to the edit item
    const onClickEdit = () => {
        
    }

    return (
        <div style={CardStyle}>
            {/* this is the contents of each card listing */}
                <div style={{ marginTop:12,marginLeft:12, width: 175, height: 175, background: '#C4C4C4', }}>

                </div>


            <div style={infoStyle}>
                <div className='item-info' style={{textAlign:'left', margin:15}}>
                    <div style={{}}><b>{item.title}</b></div>
                    <div style={{marginTop:5}}>${item.price}</div>
                    <div style={{marginTop:5}}>{item.type}</div>
                </div>
                <div style={{display:'grid', justifyItems:'right',marginTop:15}}>
                    {INQUIRY_MODE ? '' : <Button variant="primary" style={{width:125,height:40,marginRight:25}} onClick={onClickInquiry}>View Inquiries</Button>}
                    {/* ADD LINK TO EDIT INDIVIDUAL LISTINGS TAB */}
                    <Button variant="secondary" style={{width:125, height:40,marginTop:10,marginRight:25}}>Edit Listings</Button>
                </div>
                <div className='item-info' style={{textAlign:'left', marginLeft:15}}>
                    {item.description}
                </div>
            </div>

        </div>
    )
}

export default AdminCard
