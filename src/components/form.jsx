import React, { useState } from 'react';
import './form.css';
// import TextField from './TextField';
import './textField.css';
import api from '../Service/index.js'
import Modal from './Modal'


function Form() {
  const [userName, setUserName] = useState(null);
  const [github, setGithub] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [qrCode, setQrCode] = useState(false);
  const [text, setText] = useState(null)
  const [loadModal, setLoadModal] = useState(false);
  // const [getItem, setGetItem] = useState('');

  function showModal() {
    setLoadModal(true);
    // setGetItem(userName);
  }

  async function createUser(e) {
    e.preventDefault();
    try {
      const data = {
        userName,
        github,
        linkedin,
      };

      setQrCode(true)

      await api.post("/user", data);

      showModal()

      // alert(`${userName} você foi cadastrado com sucesso!`);

      
      
    } catch (err) {
      alert(`Houve um problema: ${err}`);
    }
  }

  return (
    <div className="form">
      {loadModal && <Modal isOpen={loadModal} qrcode={userName} />}
      <h2>QR CODED Image Generator</h2>
      <form action='post'>
        <div className='textField'>
          <h3>Name:</h3>
          <input
            type="text"
            name="userName"
            required
            id="userName"
            onChange={(e) => { setUserName(e.target.value) }}
          />
        </div>
        <div className='textField'>
          <h3>Github</h3>
          <input
            type="text"
            name="github"
            required
            id="userGithub"
            onChange={(e) => { setGithub(e.target.value) }}
          />
        </div>
        <div className='textField'>
          <h3>Linkedin</h3>
          <input
            type="text"
            name="linkedin"
            required
            id="userLinkedin"
            onChange={(e) => { setLinkedin(e.target.value) }}
          />
        </div>
        <button type="submit" onClick={createUser}>Generate Image</button>
      </form>
      
    </div>
  );
}

export default Form;
