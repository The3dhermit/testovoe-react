import React from 'react';
import './contactList.css';

export default function ContactList(props) {

    const handleDeleteContact = (e) => {
        props.open(true, e.target.getAttribute("data-id"));
    }

    const handleAddToRemoveList = (e) => {
        if (e.target.checked) {

            props.addToRemoveList(e.target.getAttribute("data-id"));
        } else {
            props.removeFromRemoveList(e.target.getAttribute("data-id"));
        }
    }

    const contactsContainer = props.contacts.map((contact) => {
        return (<div className={"contactsList"} style={{display: "flex"}}>
            <input data-id={contact.id} onClick={handleAddToRemoveList} className={"checkBox"} type={"checkbox"}/>
            <div style={{paddingRight: "20px"}}>Name:{contact.lastName}</div>
            <div style={{paddingRight: "20px"}}>{contact.name}</div>
            <div className={"phone"} style={{paddingRight: "20px"}}>Phone: {contact.phone}</div>
            <button className={"removeBtn"} data-id={contact.id} onClick={handleDeleteContact}></button>
        </div>)
    });
    return (<div>
        {contactsContainer}
    </div>);
}


