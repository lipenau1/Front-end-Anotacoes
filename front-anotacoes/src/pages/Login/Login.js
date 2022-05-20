import React from 'react';
import './Login.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

export default function Login() {
    const styles = theme => ({
        textField: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500
        },
        input: {
            color: 'white'
        }
    });


    return (
        <>
            <Box className='sign-up'>
                <div className='sign-up-form'>
                    <div className='sing-text-login'>
                        <h1>Login</h1>
                    </div>
                    <form className='sing-up-input-form'>
                        <div className='sing-up-input'>
                            <TextField name='login'
                                autoFocus='true'
                                type={'string'}
                                label="Login"
                                variant="standard"
                                required
                                size='small'
                                autoComplete="off"
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
                            />
                        </div>
                        <div className='button-div'>
                            <Button type='submit' className='button' variant="contained" size='small' endIcon={<SaveIcon />}>
                                Send
                            </Button>
                            <div className='sing-up-input-form'>
                            </div>
                        </div>
                    </form>
                </div>
            </Box>
        </>
    )
}