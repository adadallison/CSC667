// global state for all listings
const INITIAL_STATE = {
    type: '',
    description: '',
    price: '',
    title: '',
    listings: [],
};

const listingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_LISTINGS':
            return {
                ...state,
                listings: action.payload
            };
        case 'LISTINGS_SET_DESCRIPTION':
            return {
                ...state,
                description: action.description,
            };
        
        case 'LISTINGS_SET_TYPE':
            return {
                ...state,
                type: action.typee,
            };
        
        case 'LISTINGS_SET_TITLE':
            return {
                ...state,
                title: action.title,
            };
        
        case 'LISTINGS_SET_PRICE':
            return {
                ...state,
                price: action.price,
            };
        
        case 'LISTINGS_SET_ID':
            return {
                ...state,
                id: action.id,
            };
        
        case 'LISTINGS_SET_LISTINGS':
            return {
                ...state,
                listings: action.listings,
            };
        default:
            return state;
    }
};

export default listingReducer;