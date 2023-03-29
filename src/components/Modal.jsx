import React, { useState } from "react";
import Modal from "react-modal";
import './Modal.css'
import MyQRCode from './MyQRCode';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      height: '50%',
    },
  };
  
  function Index({ isOpen, qrcode }) {
    const [modalIsopen, setIsopen] = useState(isOpen);
    const [text, setText] = useState(qrcode);
    console.log(qrcode + " teste Modal");
    function closeModal() {
      setIsopen(false);
    }
  
  
    return (
      <div className="modal">
        <Modal
          isOpen={modalIsopen}
          onRequestClose={closeModal}
          style={customStyles}
        >
            <h3 className="nameTitle">{qrcode}</h3>
            <span className="subTitle">Scan me</span>
            <MyQRCode text={`https://vast-red-pig-yoke.cyclic.app/${qrcode}`} />
        </Modal >
      </div >
    )
  }
  
  export default Index;