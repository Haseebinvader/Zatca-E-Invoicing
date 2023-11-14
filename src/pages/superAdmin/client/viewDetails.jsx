import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(companyname, companyaddress, companyemail, companyphone, contactpersonname, contactpersonemail, companytaxid, companylicenceid, action) {
    return { companyname, companyaddress, companyemail, companyphone, contactpersonname, contactpersonemail, companytaxid, companylicenceid, action };
}

const rows = [
    createData('Company ', 'Rawalpindi', 'xyz@gmail.com', 12345678, 'Haseeb', 'abc@gmail.com', 3242, 'LM432', "Update"),
    createData('Company', 'Rawalpindi', 'xyz@gmail.com', 12345678, 'Haseeb', 'abc@gmail.com', 5344, 'MQ543', "Update"),
    createData('Company', 'Rawalpindi', 'xyz@gmail.com', 12345678, 'Haseeb', 'abc@gmail.com', 6543, 'JK654', "Update"),
    createData('Company', 'Rawalpindi', 'xyz@gmail.com', 12345678, 'Haseeb', 'abc@gmail.com', 7654, 'FD543', "Update"),
    createData('Company', 'Rawalpindi', 'xyz@gmail.com', 12345678, 'Haseeb', 'abc@gmail.com', 1234, 'KL543', "Update"),
];

export default function BasicTable() {
    return (
        <>
            <Typography variant="h4" component="div" gutterBottom>Clients Detail</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>Company Name</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Company Address</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Company Email</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Company Phone No</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Contact Person Name</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Contact Person Email</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Contact Tax ID</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Contact Licence No</TableCell>
                            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }} align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="left">
                                    {row.companyname}
                                </TableCell>
                                <TableCell align="left">{row.companyaddress}</TableCell>
                                <TableCell align="left">{row.companyemail}</TableCell>
                                <TableCell align="left">{row.companyphone}</TableCell>
                                <TableCell align="left">{row.contactpersonname}</TableCell>
                                <TableCell align="left">{row.contactpersonemail}</TableCell>
                                <TableCell align="left">{row.companytaxid}</TableCell>
                                <TableCell align="left">{row.companylicenceid}</TableCell>
                                <TableCell align="left">{row.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}