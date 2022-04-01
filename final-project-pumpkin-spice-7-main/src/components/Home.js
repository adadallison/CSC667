import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminCard from './Admin/AdminCard'
import { getListings } from '../redux/actions/adminActions';
import Listings from '../pages/addListings'
import {connect} from 'react-redux'
import Admin from '../components/Admin'
import {getUserListings} from '../redux/actions/adminActions'
import adminReducer from '../redux/reducers/adminReducer';



const Home = (props) => {

    const listings = useSelector(state => state.adminReducer.listings); //so us UseSelector able to get the listings key from 'const initialState'
    
    const [query, setQuery] = useState('');
    //console.log(listings) pr

    // const dispatch = useDispatch();
    // React.useEffect(() => {
    // dispatch(getListings());
    // }, []);

    useEffect(() => {
        props.getUserListings(); //used to get listings 
    },[])

    const searchStyle = {
        width: 500,
        height: 60,
        marginTop: 15,
        border: '1px solid black',
        borderRadius: '10px',
    }

    const getFilteredItems = (query, listings) => {
        if (!query) {
            return listings;
        }
        return listings.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)) 
        //filtering thru listings[] to see if the title OR description OR type of each item in listings[] includes the query
    }


     const filteredItems = getFilteredItems(query, listings); 
     console.log(filteredItems) // shows me which item populated in search result after typing in Search Bar

    return (
        <div>
            <input style={searchStyle} placeholder="Search Posts" type="text" onChange={e => setQuery(e.target.value)}/>
            
        
        {/* {props.listings.map((item) => <AdminCard item={item} />)} */}
        {/* displays the listings */}

        {/* <ul>
            {filteredItems.map(value => <h1 key={value.description}>{value.description} </h1>)} 
            I can choose what part of the listing i want to display but the search query must match one of the titles, so its searching by title, ut
        </ul> */}


        <ul>
            {filteredItems.map(item => <AdminCard item={item} />)} 
            {/* user can search for items by their title, as a result the enite item will display */}

        </ul>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
