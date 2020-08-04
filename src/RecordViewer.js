import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell, TableContainer, TablePagination} from '@material-ui/core'

class RecordViewer extends Component {

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
            this.props.recordToShow.map(entry => this.createRow(entry.name, entry.value))
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
                    { this.extractRecord() }
                </Table>
            </TableContainer>
        );
    }
}

export default RecordViewer;