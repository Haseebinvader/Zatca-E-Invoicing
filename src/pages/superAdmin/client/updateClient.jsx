import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';
import { imgData } from '../../../assets';

const UpdateClient = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Paper sx={{ height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: 'auto', padding: '16px', }}>
                <Typography variant="h4" component="div" gutterBottom> Client Updation </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: 'auto', }} >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField label="Company Name" variant="outlined" margin="normal" required fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" margin="normal" type="file" fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Company Address" variant="outlined" margin="normal" required fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Company Email" variant="outlined" margin="normal" type="email" required fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Company Phone Number" variant="outlined" margin="normal" required fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Contact Person Name" variant="outlined" margin="normal" required fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Contact Person Email" variant="outlined" margin="normal" type="email" required fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Company Tax ID" variant="outlined" margin="normal" fullWidth size='small' />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Company License No" variant="outlined" margin="normal" fullWidth size='small' />
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '16px', backgroundImage: `url(${imgData.formbg})`, backgroundSize: 'cover', backgroundPosition: 'fixed' }}> Update </Button>
                </Box>
            </Paper>
        </form>
    );
}

export default UpdateClient;
