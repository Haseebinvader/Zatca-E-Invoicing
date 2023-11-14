import { Grid, Typography } from "@mui/material"
import { imgData } from "../../assets"
const Navbar = () => {
  return (
    <Grid container>
      <Grid item sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', padding: '20px', backgroundColor: '#F0F8FF' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', color: '#000080' }}>E-Invoising System</Typography>
        <img src={imgData.zatcalogo} alt="logo" width='300px' />
      </Grid>
    </Grid>
  )
}

export default Navbar