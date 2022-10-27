import React from "react";
import InputForm from "./conponents/InputForm";
import ContactsList from "./conponents/ContactsList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [{
                 name: "John", lastName: "Doe", phone: "+380934565171"
            },]
        }
        this.addData = this.addData.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    deleteContact(contactId) {
        this.setState(prevState => ({
            contactList: prevState.contactList.filter(x => x.id !== contactId)
        }))
    }

    sortList() {
        this.setState(prevState => ({
            contactList: prevState.contactList.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
        }));
    }

    addData(data) {
        this.setState({contactList: [...this.state.contactList, data]});
        this.sortList();
    }

    render() {
        return (<div>
            <InputForm addData={this.addData}/>
            <ContactsList contacts={this.state} deleteContact={this.deleteContact}/>
        </div>);
    }
}
