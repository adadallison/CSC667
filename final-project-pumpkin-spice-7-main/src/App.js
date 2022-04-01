import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateMessages, handlTextChange, submitMessage } from './redux/actions/messageActions';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AdminInquiry from './components/Admin/AdminInquiry';
import Login from './components/Login';
import Register from './components/Register';
import UserInquiry from './components/Admin/UserInquiry';
import AddListings from './pages/addListings';



const Message = ({ data }) => (<div>{data}</div>);

const App = ({ }) => {
  const text = useSelector(state => state.messageReducer.text);
  const messages = useSelector(state => state.messageReducer.messages);
  const dispatch = useDispatch();

 
  // this is used to update all messages in the very beginning
  
  // React.useEffect(() => {
  //   axios.get('/messanger/getMessages')
  //     .then((res) => {
  //       dispatch(updateMessages(res.data));
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);


  const onSubmit = () => {
    dispatch(submitMessage());
  }

  const handleTextChange = (e) => {
    dispatch(handlTextChange(e.target.value));
  };

  return (
    <div className="App">
      {/* Basic Header                               */}


      {/* Add all routes here                        */}
      <Router>
        <Header />
        <Routes>
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin/inquiry/:id' element={<AdminInquiry />} />
          <Route path='/admin/userinq' element={<UserInquiry />} />
          {/* <Route exact path='/singlelistview' element={<SingleListView />}/> */}
          <Route path='/admin/addListing' element={<AddListings />} />
          <Route path='/home' element={<Home />}/> 
          
        </Routes>
        <Footer />
       
      </Router>
      {/* <div>                                                                           // The file came with this code but I am not sure where to put right now - Chris
        <div className="message-area">
          {messages.map((message, i) => <Message key={i} data={message} />)}
        </div>
      </div>
      <div>
        <input type="text" value={text} onChange={handleTextChange} />
      </div>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div> */}

    </div>
  );
};

export default App;
