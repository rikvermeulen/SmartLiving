import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import {NavLink} from 'react-router-dom'
import RippleButton from "./Buttons/Ripplebutton"



const Modal = props => {
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
    const remove = document.getElementById('electric-trans')
    const modal = document.getElementById('modal')
    remove.classList.add('remove');
    modal.classList.add('remove');
    totalPoints =+100
    console.log(totalPoints)
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
            <h2 className="modal-title"><b>Gebruik minder stroom vandaag.</b></h2>
          </div>
          <div className="modal-body">
          Je kunt veel stroom besparen voor apparaten of lampen die onnodig aanstaan. Door zulke dingen uit te schakelen bespaart u veel stroom en leeft u duurzamer. Dit is goed voor het klimaat én je portemonnee. 
            <br/>

            Tip: Sommige huishoudelijke apparaten van vóór het jaar 2000 kun je beter vervangen. Koelkasten of vriezers ouder dan 15 jaar zijn vaak energieslurpers. Let bij de aankoop van een nieuw huishoudelijk apparaat op het energielabel.
          
            <div onClick={props.onClose} className="close-container">
              <div class="leftright"></div>
              <div class="rightleft"></div>
            </div>
          </div>
          <div className="modal-footer">
            <button className= "modal_button" onClick={activateLasers} >verzilveren</button>
            <NavLink className="modal_button" exact={true} to = "/points">naar punten</NavLink>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;