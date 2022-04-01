import React, {useEffect,useState} from 'react'
import AdminCard from './Admin/AdminCard'
import {connect} from 'react-redux'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {getUserListings} from '../redux/actions/adminActions'
import { getUsers } from '../redux/actions/loginActions';
import { useDispatch } from 'react-redux';


const Admin = (props) => {

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

    // on page load, load all of the users listings
    useEffect(() => {
        props.getUserListings(); //used to get listings 
    },[])


    // navigation with the buttons
    const navigate =  useNavigate();


    const onClickInquiry = () => {
        navigate(`/admin/userinq/`)
    }
    const dispatch = useDispatch();
    const onClick = () => {

      dispatch(getUsers())
    }

    const onClickAddListing = () => {
        navigate('/admin/addListing');
    }

    return (
        <div>
            <div style={cardStyle}>
                <div style={{textAlign:'left', marginLeft:30}}>
                    Your Listings
                </div>
                
                <div style={{justifySelf:'right'}}> 
                    {/* ROUTE TO ADD LISTING BUTTON */}
                    <Button onClick={onClickAddListing} variant="primary" style={{width:125,height:40,marginRight:25}} >Add Listing</Button>
                    <Button variant="primary" style={{width:125,height:40,marginRight:25}} onClick={onClickInquiry} >View Inquiries</Button>
                </div>
            </div>
            <br/>
            {/* This will be implemented once there is a array to use */}
            {props.listings.map((item) => <AdminCard item={item} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    // connect the listings to a props state
    return {
        // this is where you connect the listings to a props from the global state
        listings: state.adminReducer.listings,
        text: state.messageReducer.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserListings: () => dispatch(getUserListings()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
