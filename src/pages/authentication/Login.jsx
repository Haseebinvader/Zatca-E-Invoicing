/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { imgData } from "../../assets";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer'
import { v4 as uuidv4 } from 'uuid';

const Login = () => {
    const [UserName, setUserName] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [UserType, setUserType] = useState("");
    const [userData, setUserData] = useState('');
    const [sessionId, setSessionId] = useState('');
    const navigate = useNavigate();
    const win = window.sessionStorage;

    useEffect(() => {
        if (win.getItem('UserName'))
            setUserName(win.getItem('UserName'));

        if (win.getItem('UserPassword'))
            setUserPassword(win.getItem('UserPassword'))
    }, [])




    useEffect(() => {
        win.setItem('UserName', UserName);
        win.setItem('UserPassword', UserPassword);
    }, [UserName, UserPassword])

    useEffect(() => {
        axios.get("http://192.168.100.216:334/api/EInvoicingSys/GetLogins").then((res) => {
            setUserData(res.data);
        })
    }, []);


    const generateSessionId = () => {
        const id = uuidv4();
        setSessionId(id);
    };

    const handleSubmit = () => {
        const user = userData.find((i) => i.UserName === UserName && i.UserPassword === UserPassword);
        if (user) {
            generateSessionId();
            if (!UserType) {
                alert("Please select a user type first.");
                return;
            }
            const formattedUserType = UserType.replace(/\s/g, ''); // Remove white spaces
            if (user.UserType.trim() === formattedUserType) {
                if (formattedUserType === "SuperAdmin") {
                    navigate("/SuperAdmin");
                } else if (formattedUserType === "Admin") {
                    navigate("/Admin");
                }
            } else {
                alert("Invalid user type. Please select the correct user type.");
            }
        } else {
            alert("Invalid username or password");
        }
    };
    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: '#F0F8FF', gap: '4rem' }}>
                <Box>
                    <Paper sx={{ padding: "20px", width: "30rem", height: "auto", textAlign: "center", backgroundImage: `url(${imgData.formbg})`, backgroundSize: "contain", backgroundPosition: "fixed", color: "#fff", borderRadius: '20px', zIndex: 10 }}>
                        <img src={imgData.zatcalogo1} alt="logo" />

                        <Typography variant="h4" sx={{ fontWeight: "600" }}> Login</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <TextField label="Username" value={UserName} variant="filled" size="small" sx={{ mt: "2rem", "& input": { color: "white" } }} InputLabelProps={{ sx: { color: "white" } }} onChange={(e) => {
                                setUserName(e.target.value)
                            }} />
                            <TextField label="Password" type="password" value={UserPassword} variant="filled" size="small" sx={{ mt: "2rem", "& input": { color: "white" }, }} InputLabelProps={{ sx: { color: "white" } }} onChange={(e) => {
                                setUserPassword(e.target.value)
                            }} />
                        </Box>
                        <Box sx={{ mt: '2rem' }}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Admin"
                                    name="radio-buttons-group"
                                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                                    value={UserType}
                                    onChange={(e) => setUserType(e.target.value)}
                                >
                                    <FormControlLabel value="Super Admin" control={<Radio />} label="Super Admin" />
                                    <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Button variant="outlined" color="success" sx={{ mt: "2rem" }} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Paper>
                </Box>
            </Box >
            <Footer />
        </>
    );
};

export default Login;
