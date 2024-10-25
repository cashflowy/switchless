'use client'
// import { useState, FormEvent, useEffect } from 'react';
import React from 'react';
import { useState } from 'react';
import NextLink from 'next/link';
import { Typography, Box, Link, FormHelperText, Snackbar, Alert } from '@mui/joy';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import FormControl from '@mui/joy/FormControl';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useSearchParams } from 'next/navigation';
import GoogleIcon from './GoogleIcon';
import { Visibility, VisibilityOff } from '@mui/icons-material';


// import { signIn } from './action';


export default function Login({ 
    emailRight=true,
    passwordRight=true, 
    /* loading=false */ 
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [openSnackbar, setOpenSnackbar] = useState(false);
  // const searchParams = useSearchParams();

//   useEffect(() => {
//     const message = searchParams.get('message');
//     if (message === 'Could not authenticate user') {
//         setLoading(false)
//       setOpenSnackbar(true);
//       const timer = setTimeout(() => setOpenSnackbar(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [searchParams]);

//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true)
//     // Access form data
//     const formElement = event.currentTarget ;
//     const formData = new FormData(formElement);
//     const email = formData.get('email');
//     const password = formData.get('password');

//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }
//     // Reset error state
//     setError('');
//     // Your login submission logic here
//     // const res = await signIn(formData)
//     if(res?.error){
//       setError(res.error);
//       setLoading(false)
//     }
//   };
const handleShowPasswordChange = () => {
    setShowPassword((prev) => !prev);
  };

const PasswordIcon =()=>{
  return(
    <IconButton sx={{ opacity: 0.7 }} onClick={handleShowPasswordChange}>
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  )
}
/* Resolve NextLink in storybook
//CheckPagnation

*/
// const CustomLink = ({children, href})=>{
//   return (
//         <JoyLink color="neutral" component={NextLink} underline="none" href={href}>
//         {children}
//         </JoyLink>
//   )
// }


  return (
    
      <Box
        sx={{ minWidth: 400,  mx: 'auto', mt: '15vh', p: 2, border: '1px solid rgba(34, 36, 38, 0.15)',  borderRadius: 1 }}>
          <Stack spacing={2}>
          <Typography component="h1" level="h2">Login</Typography>
              <FormControl error={!emailRight}>
              <Input startDecorator={<EmailIcon />} placeholder="Email" name="email" type='email' required />
              </FormControl>
              <FormControl error>
                <Input type={showPassword ? 'text' : 'password'} startDecorator={<LockIcon />} placeholder="Password" name="password" 
                error={!passwordRight} required endDecorator={<PasswordIcon/>}/>
                {/* {!passwordRight && <FormHelperText>
                  Password is wrong
                </FormHelperText>} */}
                </FormControl>
                <Box textAlign="right">
                  <Typography level="body-sm">
                    <Link href="/forgot">Forgot your password?</Link>
                  </Typography>
                </Box>
             <Button type="submit" loading={loading} >Sign In</Button>
             <Divider>OR</Divider>
             <Button startDecorator={<GoogleIcon/>} fullWidth variant="soft" color='neutral'> Continue with Google </Button>
             <Box textAlign="center">
                <Typography level="body-sm" >
                  <Link href="/signup">Create free account</Link>
                </Typography>
              </Box>
            </Stack>
        </Box>
    
  );
}