import React from 'react'
import Axios from 'axios';
import '../css/addListings.css';
import { useSelector, useDispatch } from 'react-redux';
import { descriptionAction, typeAction, priceAction, titleAction, listingsAction } from '../redux/actions/listingActions';


const AddListings = () => {
    const listingData = useSelector(state => state.listingReducer);
    const dispatch = useDispatch();

    const changeDesc = (e) => {
        dispatch(descriptionAction(e.target.value));

    };
    const changeType = (e) => {
        dispatch(typeAction(e.target.value));
    };
    const changePrice = (e) => {
        dispatch(priceAction(e.target.value));
    };
    const changeTitle = (e) => {
        dispatch(titleAction(e.target.value));
    };
    const submit = () => {
        const data = {
          description: listingData.description,
          typee: listingData.type,
          price: listingData.price,
          title: listingData.title,
        };
        Axios.post('/api/listings', data)
        .then(() => console.log('success!!'))
        .catch((err) => {
            console.log(err);
        });
        Axios.get('/api/viewListings')
        .then((res) => {
            console.log(res.data.items);
            dispatch(listingsAction(res.data.items));
        })
        .catch(() => {
            console.log('/viewListings error');
        });
    }
    return (
        <>
        {/* <button onClick={modalClose}>Click</button>
        { modalOpen && <SingleListView modalClose={modalClose}>test</SingleListView>} */}
        <div className="add-list-container">
            <h1 className='listings'>Add Listings</h1>
            <div className='add-list-title'>Title</div>
            <input className='add-list-input' placeholder='please type title' 
                value={listingData.title} 
                onChange={changeTitle}/>
            <div className='add-list-title'>Price</div>
            <input className='add-list-input' 
                placeholder='please type price'
                value={listingData.price}
                onChange={changePrice}/>
            <div className='add-list-title'>Type</div>
            <input className='add-list-input' placeholder='please type type'
                value={listingData.type}
                onChange={changeType}/>
            <div className='add-list-title'>Description</div>
            <input className='add-list-input' placeholder='please type description'
                value={listingData.description}
                onChange={changeDesc}/>
            <></>
            <button className="btn btn-primary" variant="primary" onClick={submit} style={{width:125,height:40}}>Submit</button>
        </div>
        </>
    )
}

export default AddListings;