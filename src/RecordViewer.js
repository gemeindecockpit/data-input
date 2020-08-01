import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell, TableContainer} from '@material-ui/core'

class RecordViewer extends Component {

    /**
     * Default table header.
     */
    tableHead = (<TableHead>
        <TableRow>
            <TableCell><b>Property</b></TableCell>
            <TableCell><b>Value</b></TableCell>
        </TableRow>
    </TableHead>);

    /**
     * Returns a table row containing the passed k/v pair.
     * @param key
     * @param value
     * @returns {JSX.Element}
     */
    createRow(key, value) {

        return (
            <TableRow>
                <TableCell>{ key }</TableCell>
                <TableCell>{ value }</TableCell>
            </TableRow>
        );

    }

    /**
     * Extracts each record from the passed record to a table row.
     * @returns {JSX.Element[]}
     */
    extractRecord() {

        return (
            Object.entries(this.props.recordToShow).map(entry => this.createRow(entry[0], entry[1]))
        );

    }

    /**
     * Returns a table with key and values out of the record.
     * @returns {JSX.Element}
     */
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