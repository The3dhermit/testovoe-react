import React from "react";
import InputForm from "./conponents/InputForm";
import ContactsList from "./conponents/ContactsList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = [{
            name: "biba",
            lastName: "boba",
            phone: "+380934565171"
        },
            {
                name: "bib2a",
                lastName: "bobwwwwwa2",
                phone: "+380934545171"
            }]
        this.AddData = this.AddData.bind(this);
    }

    AddData(data) {
        this.setState([...this.state, data]);
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <InputForm addData={this.AddData}/>
                <ContactsList contacts={this.state}/>
            </div>
        );
    }
}