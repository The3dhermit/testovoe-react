import React from 'react';
import './contactList.css';

export default function ContactList(props) {
    const deleteContactHandler = (e) => {
        //props.deleteContact(e.target.getAttribute("data-id"));
        props.open(true,e.target.getAttribute("data-id"));
    }
    const contactsContainer = props.contacts.contactList.map((contact) => {
        return (<div className={"contactsList"} style={{display: "flex"}}>
                <div style={{paddingRight: "20px"}}>Name: {contact.name}</div>
                <div style={{paddingRight: "20px"}}>{contact.lastName}</div>
                <div className={"phone"} style={{paddingRight: "20px"}}>Phone: {contact.phone}</div>
                <button className={"removeBtn"} data-id={contact.id} onClick={deleteContactHandler}></button>
        </div>)
    });

    return (contactsContainer);
}


