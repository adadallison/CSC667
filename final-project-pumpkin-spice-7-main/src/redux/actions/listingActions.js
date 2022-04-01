import axios from 'axios';

// gets all listings from the db and sends to global state
export const getListings = () => async dispatch => {
    // aynsc call in order to call a dispatch
    try {
        const res = await axios.get(`/api/listings`)
        console.log(res.data)
        // this is what sends the data to the reducer
        return dispatch({
            type: "GET_LISTINGS",
            payload: res.data
        })
    }
    catch (e) {
        console.log(e)
    }

};

export const descriptionAction = description => ({
type: 'LISTINGS_SET_DESCRIPTION',
description,
});

export const typeAction = typee => ({
type: 'LISTINGS_SET_TYPE',
typee,
});

export const priceAction = price => ({
type: 'LISTINGS_SET_PRICE',
price,
});

export const titleAction = title => ({
type: 'LISTINGS_SET_TITLE',
title,
});

export const listingsAction = listings => ({
    type: 'LISTINGS_SET_LISTINGS',
    listings,
});