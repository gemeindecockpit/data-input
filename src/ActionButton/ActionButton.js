import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

class MyComponent extends Component {
    render() {
        return (
            <div>
                <Button onClick={ this.props.btn_left.onClick }>{ this.props.btn_left.text }</Button>
                <Button onClick={ this.props.btn_right.onClick }>{ this.props.btn_right.text }</Button>
            </div>
        );
    }
}

export default MyComponent;
