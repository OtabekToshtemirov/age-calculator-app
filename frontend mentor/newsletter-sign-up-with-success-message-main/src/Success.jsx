import React from 'react';
import checked from '../assets/images/icon-success.svg'
import './Succes.css'

const Success = ({setSuccess}) => {


    return (
        <div className={'success'}>
            <div className="success__wrapper">
                <img src={checked} alt="icon checked"/>
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to {localStorage.getItem('email')}. Please open it and click the
                    link to confirm your subscription.
                </p>
                <button
                    className={"dismiss-button"}
                    onClick={() => setSuccess(false)}
                >
                    Dismiss message
                </button>
            </div>

        </div>
    );
};

export default Success;