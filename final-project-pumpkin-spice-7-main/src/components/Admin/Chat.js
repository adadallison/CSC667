import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { insertMessage } from '../../redux/actions/messageActions'
import {handlTextChange,submitMessage,updateMessages} from '../../redux/actions/messageActions'
import {getUserListings} from '../../redux/actions/adminActions'


const Chat = (props) => {

    // styling of the chat box
    const cardStyle = {
        width: 800,
        height: 800,
        marginTop: 15,

        border: '1px solid black',
        borderRadius: 10,
        
        display: 'grid',
        gridTemplateRows: "4rem 1rem 1fr 1rem 5rem",
    }

    // setting the states for the current selected inquiry
    const [name, setName] = useState('')
    const [current, setCurrent] = useState('')

    // sets the current focus of the chat box (which inquiry is currently being used)
    useEffect(() => {
        if (props.id >= 0) {
            setName(props.listings[props.listingId].inquiries[props.id].name)
            props.updateMessages(props.listings[props.listingId].inquiries[props.id].message)
            props.getUserListings();
        }

    }, [props.id])

    // submition of chat message
    const onClick = (e) => {

        props.submitMessage(props.listingId,props.id,0);

        setCurrent('')
    }

    return (
        <div style={cardStyle}>
            <div style={{ textAlign: 'left', marginLeft: 25, marginTop: 25 }}>
                {props.id === -1 ? '' : <b style={{ fontSize: 24 }}>{name}</b>}

            </div>
            <hr />

            <div style={{ display: 'flex', flexDirection: 'column-reverse', gridGap: 15, overflowY: 'scroll',marginTop:10 }}>
                {props.messages.slice(0).reverse().map((message) => (
                    <div style={message[0] ?{ marginLeft: '2rem', marginRight: '2rem',textAlign:'left' } : {marginLeft: '2rem', marginRight: '2rem',textAlign:'right'}}>
                        ◦ {message[1]}

                    </div>
                ))}
            </div>
            <hr />

            <div style={{ margin: 10 }}>
                <InputGroup>
                    <Form.Control type="text" name="mess" value={current} onChange={e => {
                        setCurrent(e.target.value);
                        props.handlTextChange(e.target.value)}} />
                    <Button onClick={onClick}>Send!</Button>
                </InputGroup>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        id: state.adminReducer.focus,
        listings: state.adminReducer.listings,
        messages: state.messageReducer.messages,
        text: state.messageReducer.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        send: (message) => dispatch(insertMessage(message)),
        handlTextChange: (text) => dispatch(handlTextChange(text)),

        submitMessage: (listingId,id,user) => dispatch(submitMessage(listingId,id,user)),

        updateMessages: (messages) => dispatch(updateMessages(messages)),
        insertMessage: (message) => dispatch(insertMessage(message)),
        getUserListings: () => dispatch(getUserListings()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
