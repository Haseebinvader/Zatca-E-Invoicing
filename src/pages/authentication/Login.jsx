import { Box, Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { imgData } from "../../assets";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: '#F0F8FF', gap: '2rem' }}>
            <Box>
                <Typography variant="h3" sx={{ fontWeight: '600' }}>E-Invoising System</Typography>
                <img src={imgData.formbg} alt="" width='400' />
            </Box>
            <Box>
                <Paper sx={{ padding: "120px", width: "auto", height: "auto", textAlign: "center", backgroundImage: `url(${imgData.formbg})`, backgroundSize: "contain", backgroundPosition: "fixed", color: "#fff", borderRadius: '20px', zIndex: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: "600" }}> Login</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <TextField label="Username" variant="filled" size="small" sx={{ mt: "2rem", "& input": { color: "white" } }} InputLabelProps={{ sx: { color: "white" } }} />
                        <TextField label="Password" variant="filled" size="small" sx={{ mt: "2rem", "& input": { color: "white" }, }} InputLabelProps={{ sx: { color: "white" } }} />
                    </Box>
                    <Box sx={{mt: '2rem'}}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Admin" />
                                <FormControlLabel value="male" control={<Radio />} label="Employee" />
                                <FormControlLabel value="other" control={<Radio />} label="Customer" />
                            </RadioGroup>
                        </FormControl>

                    </Box>
                    <Link to='/Admin'>
                        <Button variant="outlined" color="success" sx={{ mt: "2rem" }}> Submit </Button>
                    </Link>
                </Paper>
            </Box>
        </Box >
    );
};

export default Login;
