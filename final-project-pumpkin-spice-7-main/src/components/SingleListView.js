import React from 'react'
import '../css/singleviewlist.css'
import fakedata from '../images/fakedata.jpeg'
import xIcon from '../images/x-icon.png';
const SingleListView = ({modalClose}) => {
    return (
        <div className="singlelistview_container">
            <div className="modal">
                <div className="modal-nav"><img className="modal__button" onClick={modalClose} src={xIcon} alt='' /></div>
                <div className="modal-content">
                    <img className="single-img" src={fakedata} alt='single-img' />
                    <div>description</div>
                </div>
            </div>
        </div>
    )
}

export default SingleListView
