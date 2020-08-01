import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell, TableContainer} from '@material-ui/core'

class RecordViewer extends Component {

    tableHead = (<TableHead>
        <TableRow>
            <TableCell><b>Property</b></TableCell>
            <TableCell><b>Value</b></TableCell>
        </TableRow>
    </TableHead>);

    createRow(key, value) {

        return (
            <TableRow>
                <TableCell>{ key }</TableCell>
                <TableCell>{ value }</TableCell>
            </TableRow>
        );

    }

    extractRecord() {

        return (
            Object.entries(this.props.recordToShow).map(entry => this.createRow(entry[0], entry[1]))
        );

    }

    render() {
        return (
            <TableContainer>
                <Table>
                    { this.tableHead }
                    { this.extractRecord() }
                </Table>
            </TableContainer>
        );
    }
}

export default RecordViewer;