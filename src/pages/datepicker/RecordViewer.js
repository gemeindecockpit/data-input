import React, {Component} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from '@material-ui/core'

class RecordViewer extends Component {

    /**
     * Returns a table row containing the passed k/v pair.
     * @param key
     * @param value
     * @returns {JSX.Element}
     */
    createRow(key, value) {

        return (
            <TableRow key={ key }>
                <TableCell style={{ fontSize:"12px" }}>{ key }</TableCell>
                <TableCell style={{ fontSize:"12px" }}>{ value }</TableCell>
            </TableRow>
        );

    }

    /**
     * Extracts each record from the passed record to a table row.
     * @returns {JSX.Element[]}
     */
    extractRecord() {
        return this.props.recordToDisplay.map(entry => this.createRow(entry.field_name, entry.field_value))
    }

    /**
     * Returns a table with key and values out of the record.
     * @returns {JSX.Element}
     */
    render() {

        if (this.props.recordToDisplay === null) {

            return (
                <b>No data</b>
            );

        } else {

            return (
                <TableContainer>
                    <Table size="small">
                        <TableBody>
                            { this.extractRecord() }
                        </TableBody>
                    </Table>
                </TableContainer>
            );

        }
    }
}

export default RecordViewer;