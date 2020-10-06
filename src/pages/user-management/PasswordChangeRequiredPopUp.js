import Popup from "reactjs-popup";
import React, {Component} from "react";


export default class PasswordReminder extends Component
{
    redirectProfilePage = () =>
    {
        this.props.redirectProfilePage();
    }

    render()
    {
        return(
            this.props.pwResetRequired ?
            <Popup trigger={<button> Trigger</button>} position="top-righ">
                <div>A password change is required. <button onClick={this.redirectProfilePage}>Click here</button></div>
            </Popup> : null
        );
    }
}