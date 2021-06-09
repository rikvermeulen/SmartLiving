import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import {NavLink} from 'react-router-dom'



const ModalPoints = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  function activateLasers() {
    let totalPoints
    const remove = document.getElementById('test')
    const total = document.getElementById('test1')
    const modal = document.getElementById('modal')
    total.innerHTML = '2700'
    remove.classList.add('remove');
    modal.classList.add('remove');
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" id="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title"><b>Gratis zakje stroopwafels</b></h2>
          </div>
          <div className="modal-body">
            Claim hier voor 500 punten een gratis zakje stroopwafels bij Albert Heijn.<br/>
            <br/>
            De barcode wordt opgestuurd via uw aangeven mail-adres om dit bij de dichtstbijzijnde Albert Heijn te verzilveren!
          
            <div onClick={props.onClose} className="close-container">
              <div class="leftright"></div>
              <div class="rightleft"></div>
            </div>
          </div>
          <div className="modal-footer">
            <button className= "modal_button" onClick={activateLasers} >verzilveren</button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default ModalPoints;