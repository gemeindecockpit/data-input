import React, {Component} from 'react';
import ActionButton from './ActionButton';

class DoubleActionButton extends Component {
    render() {
        return (<div>
            <ActionButton
                onClick={ this.props.btn_submit.onClick }
                text={ this.props.btn_submit.text }
            />
            <ActionButton
                onClick={ this.props.btn_abort.onClick }
                text={ this.props.btn_abort.text }
                style={{ marginTop: "-10px", paddingBottom: "10px" }}
                theme={ "red" }
            />
        </div>);
    }
}

export default DoubleActionButton;
