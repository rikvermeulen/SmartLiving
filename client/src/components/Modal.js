import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import {NavLink} from 'react-router-dom'

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

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title"><b>Gebruik de wasmachine minder</b></h2>
          </div>
          <div className="modal-body">
            Een wasmachine gebruikt gemiddeld 80 liter wate. Door alleen de wasmachine te gebruiken wanneer deze echt vol zit kan u op lange termijn vele liters water besparen. <br/>
            <br/>
            Daarnaast kost het 0,35 kWh aan stroom om een was van 40 graden te draaien hiermee kunt u 4 maal 1 liter water koken, warmere wasbeurten verbruiken nog meer energie.
          
            <div onClick={props.onClose} className="close-container">
              <div class="leftright"></div>
              <div class="rightleft"></div>
            </div>
          </div>
          <div className="modal-footer">
            <button className= "modal_button" >verzilveren</button>
            <NavLink className="modal_button" exact={true} to = "/points">naar punten</NavLink>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;