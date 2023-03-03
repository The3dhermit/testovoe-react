import React from 'react';
import './confirmDelete.css'


function ConfirmDelete(props) {

    const handleYes = () => {
        props.deleteContact();

        handleNo();
    }

    const handleNo = () => {
        props.open(false,"");
    }

    if (props.confirm) {
        return (
            <div className={"confirm"}>
                Are you sure about that?
                <div className={"buttons"}>
                    <button onClick={handleYes}>Yes</button>
                    <button onClick={handleNo}>No</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default ConfirmDelete;