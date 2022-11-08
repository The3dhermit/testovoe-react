import React from "react";
import InputForm from "./conponents/InputForm";
import ContactsList from "./conponents/ContactsList";
import ConfirmDelete from "./conponents/ConfirmDelete";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [{
                 name: "John", lastName: "Doe", phone: "+380934565171"
            },],
            open: false,
            id: '',
        }
        this.addData = this.addData.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.confirmOpen = this.confirmOpen.bind(this);
    }

    deleteContact() {
        this.setState(prevState => ({
            contactList: prevState.contactList.filter(x => x.id !== this.state.id)
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

    confirmOpen(state,id){
        this.setState({open:state});
        this.setState({id:id})
        console.log(this.state.open);
    }

    render() {
        return (<div>
            <InputForm addData={this.addData}/>
            <ContactsList open={this.confirmOpen} contacts={this.state} deleteContact={this.deleteContact}/>
            <ConfirmDelete confirm={this.state.open} deleteContact={this.deleteContact} open={this.confirmOpen}/>
        </div>);
    }
}
