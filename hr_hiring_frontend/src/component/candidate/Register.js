import React, {useState} from 'react';
import axioInstance from '../../axios';
import{useNavigate} from 'react-router-dom';
// use the useNavigate to redirect the user after they've register

//MaterialUi

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import  CssBaseline  from '@material-ui/core/CssBaseline';
import  TextField from '@material-ui/core/TextField';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import requests from '../../request';
import logo from '../../logo.png';

const useStyles = makeStyles((theme)=>({
    paper:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
		
    },
    avatar:{
        margin:theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
		width:161,
		height:105,
		paddingBottom:9,
		
    },
	logo:{
		width:168,
		height:113,

	},
	
    form:{
        width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
    },
    submit:{
        margin:theme.spacing(3, 0, 2),
    },
}));

 function SignUP(){
	let navigate = useNavigate();
	const initialFormData = Object.freeze({
		email:'',
		username:'',
		password:'',
	});
	const [formData, updateFormData]= useState(initialFormData);
	const handleChange=(e)=>{
		updateFormData({
			...formData,
			[e.target.name]:e.target.value.trim(),

		});
	};
	const handleSubmit=(e)=>{
		e.preventDefault();
		console.log(formData);

		axioInstance 
				.post(requests.Registration, {
					email:formData.email,
					username:formData.username,
					password:formData.password,
				})
				.then((res)=>{
					navigate('/home');
					console.log(res);
					console.log(res.data);				
				});
	};
    const classes = useStyles();



    return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}  ><img  className={classes.logo} src={logo} /></Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoComplete="username"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);


    }
	export default SignUP;