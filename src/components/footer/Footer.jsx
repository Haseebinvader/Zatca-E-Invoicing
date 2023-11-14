import { Grid, Typography } from "@mui/material"
import { imgData } from "../../assets"
import { Link } from "react-router-dom"
const Footer = () => {
  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5px', // Adjust as needed
    padding: '2px'
  };

  const listIconStyle = {
    marginRight: '5px', // Adjust as needed
  };
  return (
    <>
      <Link to='https://tmrconsult.com/' style={{ textDecoration: 'none', color: '#000' }}>
        <Typography variant="h5" sx={{ fontWeight: '600', backgroundColor: '#F0F8FF', padding: '10px' }}>Powered By:</Typography>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F0F8FF', height: '15rem', padding: '10px' }}>
          <Grid item>
            <Link to='https://tmrconsult.com/'>
              <img src={imgData.tmrlogo} alt="logo" width='300px' />
            </Link>
          </Grid>
          <Grid item sx={{ marginLeft: '20px' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>Our Locations</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}>
              <span style={listIconStyle}>📍</span>USA
            </Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}>
              <span style={listIconStyle}>📍</span>CANADA
            </Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}>
              <span style={listIconStyle}>📍</span>UAE
            </Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}>
              <span style={listIconStyle}>📍</span>PAKISTAN
            </Typography>
          </Grid>
          <Grid item sx={{ marginLeft: '20px' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>TMRC - Services</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>ERP consultancy || Implementation Services || Software Providers</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Cloud Services</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Web and Software Development</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Digital Marketing and SEO</Typography>
          </Grid>
          <Grid item sx={{ marginLeft: '20px', pt: '10px' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '600' }}>TMRC - Solutions</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Dynamics 365 Finance and Operations</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Dynamics 365 Business Central</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Microsoft Azure Products and Services</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Microsoft Office 365</Typography>
            <Typography sx={{ ...listItemStyle, ':hover': { color: 'blue' } }}><span style={listIconStyle}>📍</span>Real Estate Management System – REMS</Typography>
          </Grid>
        </Grid>
      </Link>
    </>
  )
}

export default Footer;
