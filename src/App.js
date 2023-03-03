import React, {useState,useEffect} from "react";
import InputForm from "./conponents/InputForm";
import ContactsList from "./conponents/ContactsList";
import ConfirmDelete from "./conponents/ConfirmDelete";

export default function App() {

    const [contactList, setContactList] = useState([{
        name: "John", lastName: "Doe", phone: "+380934565171"
    },]);
    const [open, setOpen] = useState();
    const [id, setId] = useState();
    const [removeList, setRemoveList] = useState([]);
    const [remButton, setRemButton] = useState();



    function deleteContact() {
        if (id === "mult") {

            deleteMultiple();
        } else {
            setContactList(contactList.filter(x => x.id !== id));
        }
    }

    function sortList() {
        setContactList(prevList => prevList.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)));
    }

    function deleteMultiple() {
        const remList = new Set(removeList);
        const newList = contactList.filter((contact) => {
            return !remList.has(contact.id)

        })
        setContactList(newList);
        setRemoveList([]);
    }

    function addData(data) {
        setContactList( [...contactList, data]);

        sortList();
    }

    useEffect(() => {
        removeAllBtnAppearance();;
    }, [removeList]);

    function addToRemoveList(data) {
        console.log("removeList.length")
        setRemoveList([...removeList, data]);
        console.log(removeList);
    }

    function removeFromRemoveList(data) {
        setRemoveList(removeList.filter(x => x !== data));
    }

    function confirmOpen(state, ids) {
        if (ids === "mult") {
            setOpen(state);
            setId(ids);

        } else {
            setOpen(state);
            setId(ids);
        }
    }

    function removeAllBtnAppearance() {
        if (removeList.length > 0) {
            setRemButton(<button onClick={() => {
                confirmOpen(true, "mult")
            }}>Remove all</button>);
        } else {
            setRemButton(null);
        }
    }


    return (<div>
        <InputForm addData={addData}/>
        {remButton}
        <ContactsList deleteMultiple={deleteMultiple} removeFromRemoveList={removeFromRemoveList}
                      addToRemoveList={addToRemoveList} open={confirmOpen} contacts={contactList}
                      deleteContact={deleteContact}/>
        <ConfirmDelete confirm={open} deleteContact={deleteContact} open={confirmOpen}/>
    </div>);

}
