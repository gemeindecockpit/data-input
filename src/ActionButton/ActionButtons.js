import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class ActionButtons extends Component {
    render() {
        return (
            <div>
                <Button
                    size="large"
                    style={ {
                        marginTop: "10px"
                    } }
                    onClick={ this.props.btn_left.onClick }
                >
                    { this.props.btn_left.text }
                </Button>
                <Button
                    size="large"
                    style={ {
                        marginTop: "10px"
                    } }
                    onClick={ this.props.btn_right.onClick }
                >
                    { this.props.btn_right.text }
                </Button>
            </div>
        );
    }
}

export default ActionButtons;
