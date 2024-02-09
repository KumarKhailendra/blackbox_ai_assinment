import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Divider from '@mui/material/Divider';

export default function Footer() {
    const [socialLinkData, setSocialLinkData] = useState();
    useEffect(() => {
        fetch("https://trading.work.gd/socialMedias")
            .then((res) => res.json())
            .then((json) => {
                setSocialLinkData(json);
            });
    }, []);

    return (
        <Box sx={{ background: "#121212", pb: "20px" }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            <Box sx={{ mt: "10px", color: "#90caf9" }}>Let's keep in touch!</Box>
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            <Box sx={{  mt: "10px" }}>We respond within 2 working days.</Box>
                        </Typography>
                        <Typography gutterBottom variant="div" component="div" sx={{ mt: "40px",}}>
                            {
                                socialLinkData?.map((socialLink, index)=>(
                                    <Link href={socialLink.Link} sx={{ ml: "10px",}} key={index} >
                                    {socialLink?.name === "Facebook" 
                                    ? <FacebookRoundedIcon />: socialLink?.name === "Youtube" 
                                    ? <YouTubeIcon />: socialLink?.name === "X" 
                                    ? <XIcon />: socialLink?.name === "Instagram" 
                                    ?<InstagramIcon />: <LinkedInIcon />}
                                    </Link>
                                ))
                            }
                        </Typography>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={4}>
                    <Typography gutterBottom variant="h5" component="div">
                            <Box sx={{textAlign: 'center', mt: "10px", color: "#90caf9" }}>USEFUL LINKS</Box>
                        </Typography>
                        <Typography gutterBottom variant="div" component="div" sx={{ textAlign: 'center', textDecoration: 'none', display: "flex", flexDirection: "column", mb: '40px'}}>
                            <Link sx={{ textDecoration: 'none', color: "#fff", cursor: 'pointer', mt: '20px'}}  >Home</Link>
                            <Link sx={{ textDecoration: 'none', color: "#fff", cursor: 'pointer', mt: '20px'}}>Services</Link>
                            <Link sx={{ textDecoration: 'none', color: "#fff", cursor: 'pointer', mt: '20px'}}>Contect</Link>
                            <Link sx={{ textDecoration: 'none', color: "#fff", cursor: 'pointer', mt: '20px'}} >Privacy Policy</Link>
                        </Typography>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={4}>
                    <Typography gutterBottom variant="h5" component="div">
                            <Box sx={{ textAlign: 'center', mt: "10px", color: "#90caf9" }}>Office Address</Box>
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                            <Box sx={{ textAlign: 'center', mt: "10px" }}><PlaceIcon /> Office No-09, B-69 Sector-2, Noida Distt. G.B. Nagar (U.P.) 201301</Box>
                            <Box sx={{ textAlign: 'center', mt: "10px" }}><LocalPhoneIcon /> +91 9625165135</Box>
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
            <Box sx={{ textAlign: 'center', mt: "20px"}}>Copyright © 2024 Shensu AI Technologies Pvt Ltd. All rights reserved.</Box>
        </Box>
    );
}
