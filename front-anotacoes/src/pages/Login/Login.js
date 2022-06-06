import React, { useState } from 'react';
import './Login.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import AccountCircle from '@mui/icons-material/AccountCircle';
import api from './../../utils/api';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    let navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const validateErrors = (values) => {
        let newError = {}

        if (!values.user) {
            newError.user = { error: true, helperText: "Login nao pode ser vazio" }
        }
        if (!values.password) {
            newError.password = { error: true, helperText: "Senha nao pode ser vazio" }
        }
        if (Object.keys(newError).length) {
            setErrors(newError)
            return false;
        }
        return true;

    }

    const resetError = (field) => {
        setErrors({ ...errors, [field]: { error: false, helperText: "" } })
    }


    const submitForm = (values) => {

        if (!validateErrors(values)) {
            return false
        }
        const request = {
            login: values.user,
            password: values.password
        }

        let response = api.login(request).then((res) => {

            console.log(res);
            if (!res.data) {
                return alert('deu merda piazada')
            }else{
                navigate('/home')
            }
        }); 

    };

    const loginFormik = useFormik({
        initialValues: {
            user: "",
            password: "",
        },
        onSubmit: submitForm
    });

    return (
        <>
            <Box className='sign-up'>
                <div className='sign-up-form'>
                    <div className='sing-text-login'>
                        <h2>Login</h2>
                    </div>
                    <form className='sing-up-input-form' onSubmit={loginFormik.handleSubmit}>
                        <div className='sing-up-input'>


                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField name='user'
                                autoFocus='true'
                                type={'string'}
                                label="Login"
                                variant="standard"
                                required
                                size='small'
                                autoComplete="off"
                                onChange={(e) => {
                                    resetError(e.target.name);
                                    loginFormik.handleChange(e)
                                }}
                                values={loginFormik.values.user}
                            />
                        </div>
                        <div className='sing-up-input'>
                            <TextField name='password'
                                type={'password'}
                                label="Password"
                                variant="standard"
                                required
                                size='small'
                                autoComplete="off"
                                onChange={(e) => {
                                    resetError(e.target.name);
                                    loginFormik.handleChange(e)
                                }}
                                values={loginFormik.values.password}
                            />
                        </div>
                        <div className='button-div'>
                            <Button type='submit' className='button' variant="contained" size='small' endIcon={<SaveIcon />}>
                                Send
                            </Button>
                            <div className='login-bottom'>
                            <Link to={"/register"}
                            >Don't have an account?
                            </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Box>
        </>
    )
}