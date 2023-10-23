import React, { useState } from "react";
import "../UserProfilePage.scss";
import SuccessModal from "./SuccessModal";

function PaymentModal({closeModal}) {
  const [openSuccess, setOpenSuccess] = useState(false);

  const closeOpenSuccess = () => {
    closeModal();
    setOpenSuccess(true);
  }

  return (
    <div className="article_form">
      <h4>Payment</h4>
      <h5>Hero Trio Annual plan: $150 charged every 12 months</h5>
      <div className="article_form-inputs">
        <div className="short_inp">
          {/* <p className="input_p">First name*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              />
              <p className="input_p">Last name*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              /> */}
          {/* <p className="input_p">Country*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              /> */}
          {/* <p className="input_p">Zip code*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              /> */}
        </div>
        <div className="card_inp">
          <p className="input_p">Credit card details*</p>
          <input
            // className="text_input"
            id="card_input"
            placeholder="Card number  MM    YYYY   CVV"
            type="text"
          />
        </div>
        <br />
        <button onClick={closeOpenSuccess}>Get instant access now</button>
        <p id="clear_all">Clear all</p>
        <div>
          <input type="checkbox" /> By submitting this form, you agree to
          Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
