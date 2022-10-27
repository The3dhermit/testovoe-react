import React from 'react';

export default function ContactList(props) {
    const deleteContactHandler = (e) => {
        props.deleteContact(e.target.getAttribute("data-id"));
    }
    const contactsContainer = props.contacts.contactList.map((contact) => {
        return (<div style={{display: "flex"}}>
                <div style={{paddingRight: "20px"}}>{contact.name}</div>
                <div style={{paddingRight: "20px"}}>{contact.lastName}</div>
                <div style={{paddingRight: "20px"}}>{contact.phone}</div>
                <button data-id={contact.id} onClick={deleteContactHandler}>Delete</button>
            </div>)
    });

    return (contactsContainer);
}


