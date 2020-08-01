import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableCell} from '@material-ui/core'

class DataViewer extends Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Property</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableRow>
                        <TableCell>TEST</TableCell>
                        <TableCell>TEST2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>TEST</TableCell>
                        <TableCell>TEST2</TableCell>
                    </TableRow>
                </Table>
            </div>
        );
    }
}

export default DataViewer;