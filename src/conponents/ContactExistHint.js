import React from 'react';
import './ContactExistHint.css';

function ContactExistHint(props) {

    let message;

    if (props.contactExists) {
        message = <div><p>Contact already exists</p></div>;
    } else {
        message = null;
    }


    return (
        <div>{message}</div>
    );
}

export default ContactExistHint;