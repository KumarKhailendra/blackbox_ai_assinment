import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Box, Button, Stack, TextField } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function WebinarRegistretion({webinarCardData}) {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [dateOfBirth, setDateOfBirth] = React.useState('')
    const [password, setPassword] = React.useState('')
  return (
    <>
        <Typography gutterBottom variant="h6" component="h6" sx={{pt: '20px'}}>
        <Box sx={{ textAlign: 'center', m: 5, fontWeight: '600', fontFamily: 'Lato,sans-serif' }}>Register For the {webinarCardData?.webinar_name} Webinar</Box>
        </Typography>
    <Paper
      sx={{
        p: 2,
        margin: '20px',
        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#000000' : '#fff',
        border: '1px solid #fff',
        borderRadius: "10px"
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={5} lg={5} xl={5} >
          <Box sx={{ width: '100%', height: '100%' }}>
            <Img alt="complex" sx={{background: '#fff0f5'}} src={'https://www.blackbox-ai.org/webiniar/register.svg'} height={'100%'} width={'100%'} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={7} xl={7} >
        <h2 style={{marginBottom: "40px"}}>Register Form</h2>
        <form>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Whatsapp Number"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="City"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Years of trading experience"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                </Stack>
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}