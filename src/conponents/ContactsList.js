import React from 'react';

export default function ContactList(props) {

    const contactsRender = props.contacts.map((contact) => {
        return (
            <div style={{display: "flex"}}>
                <div style={{paddingRight: "20px" }}>{contact.name}</div>
                <div style={{paddingRight: "20px" }}>{contact.lastName}</div>
                <div style={{paddingRight: "20px" }}>{contact.phone}</div>
            </div>
        )
    });

    return (
        contactsRender
    );
}


