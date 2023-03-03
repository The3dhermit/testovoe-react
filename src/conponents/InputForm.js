import React, {useState} from 'react'
import {CheckName, CheckPhone} from "./CheckInput";
import { v4 as uuidv4 } from 'uuid';
import  './stile.css';

export default function InputForm(props) {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (CheckName(name).submitCheck &&
            CheckName(lastName).submitCheck &&
            CheckPhone(phone).submitCheck) {

            const data = {
                id: uuidv4(),
                name: name,
                lastName: lastName,
                phone: phone
            }
            props.addData(data);
        }
    }
    const handleNameInput = (e) => {
        setName(e.target.value);
    }
    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    }
    const handlePhoneInput = (e) => {
        setPhone(e.target.value);
    }

    return (<form onSubmit={handleSubmit} action="">
            <label>
                <div className={"errorName"}>{CheckName(name).errorMessage}</div>
                First Name:
                <input onInput={handleNameInput} type="text" name="name" placeholder={"First Name"} required/>
            </label>
            <label>
                <div className={"errorName"}>{CheckName(lastName).errorMessage}</div>
                Last Name:
                <input onInput={handleLastNameInput} type="text" name="name" placeholder={"Last Name"} required/>
            </label>
            <label>
                <div className={"errorName"}>{CheckPhone(phone).errorMessage}</div>
                Phone:
                <input onInput={handlePhoneInput} type="phone" name="name" placeholder={"+380"} required/>
            </label>
            <button type={"submit"}>Add Contact</button>
        </form>)
}
