import React, {Component} from 'react';

const newData = [
    {
        name: "Anzahl Atemschutzgeräte",
        value: 101
    },
    {
        name: "Verfügbare Kräfte",
        value: 44
    }
]

class ReviewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recordToShow: newData
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ReviewScreen;