// import React from 'react'
// import Axios from 'axios';
// import SingleListView from '../components/SingleListView'
// import '../css/addListings.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { descriptionAction, typeAction, priceAction, titleAction, listingsAction } from '../redux/actions/listingActions';


// // const Listings = () => {
// //     const [modalOpen, setModalOpen] = useState(false)
// //     const modalClose = () => {
// //         setModalOpen(!modalOpen)
// //     }
// const AddListings = () => {
//     // const [modalOpen, setModalOpen] = useState(false)
//     // const modalClose = () => {
//     //     setModalOpen(!modalOpen)
//     // }
//     const dispatch = useDispatch();

//     const description = useSelector(state => state.listingReducer.description);
//     const typee = useSelector(state => state.listingReducer.typee);
//     const price = useSelector(state => state.listingReducer.price);
//     const title = useSelector(state => state.listingReducer.title);
  

//     const changeDesc = (e) => {
//         dispatch(descriptionAction(e.target.value));
//     };
//     const changeType = (e) => {
//         dispatch(typeAction(e.target.value));
//     };
//     const changePrice = (e) => {
//         dispatch(priceAction(e.target.value));
//     };
//     const changeTitle = (e) => {
//         dispatch(titleAction(e.target.value));
//     };
//     const submit = () => {
//         const data = {
//           description,
//           typee,
//           price,
//           title,
//         };
//         Axios.post('/api/createListing', data)
//         .then(() => console.log('success!!'))
//         .catch(() => {
//             console.log('error');
//         });
//         Axios.get('/api/viewListings')
//         .then((res) => {
//             console.log(res.data.items);
//             dispatch(listingsAction(res.data.items));
//         })
//         .catch(() => {
//             console.log('/viewListings error');
//         });
//     }
//     return (
//         <>
//         {/* <button onClick={modalClose}>Click</button>
//         { modalOpen && <SingleListView modalClose={modalClose}>test</SingleListView>} */}
//         <div className="add-list-container">
//             <h1 className='listings'>Add Listings</h1>
//             <div className='add-list-title'>Title</div>
//             <input className='add-list-input' placeholder='please type title' 
//                 value={title} 
//                 onChange={changeTitle}/>
//             <div className='add-list-title'>Price</div>
//             <input className='add-list-input' 
//                 placeholder='please type price'
//                 value={price}
//                 onChange={changePrice}/>
//             <div className='add-list-title'>Type</div>
//             <input className='add-list-input' placeholder='please type type'
//                 value={typee}
//                 onChange={changeType}/>
//             <div className='add-list-title'>Description</div>
//             <input className='add-list-input' placeholder='please type description'
//                 value={description}
//                 onChange={changeDesc}/>
//             <></>
//             <button className="btn btn-primary" variant="primary" onClick={submit} style={{width:125,height:40}}>Submit</button>
//         </div>
//         </>
//     )
// }

// export default AddListings;