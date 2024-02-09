import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant="div" component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

export default function WebinarDetaile({ webinarCardData }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography gutterBottom variant="h4" component="div">
                <Box sx={{ textAlign: 'Left', mt: "6.3rem" }}>About Webinar</Box>
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Instroctor" {...a11yProps(1)} />
                        <Tab label="Help" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Typography gutterBottom variant="h5" component="div">
                        <Box sx={{ textAlign: 'Left', mt: "10px" }}>What you will learn in this master class:</Box>
                    </Typography>
                    <Typography gutterBottom variant="div" component="div">
                        {webinarCardData?.what_you_learn.map((data, index) => (
                            <Box sx={{ textAlign: 'Left', mt: "5px", color: '#777777' }} key={index}>✅ {data.content}</Box>
                        ))
                        }
                    </Typography>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt="complex" src={webinarCardData?.image}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom>
                                            {webinarCardData?.about_instructor}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt="complex" src='https://www.blackbox-ai.org/images/logo.svg' />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="h4" gutterBottom>
                                        For More Details
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Contect Now
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </CustomTabPanel>
            </Box>
        </>
    );
}