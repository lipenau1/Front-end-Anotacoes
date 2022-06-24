import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Componentes.css'
import { useNavigate } from "react-router-dom";




const LogoutDialog = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const show = () => {
        setOpen(true);
    }

    useImperativeHandle(ref, () => ({
        show,
    }));

    let navigate = useNavigate();

    const backlogin = () => {
        navigate('/login');
    }

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: 0,
                    borderRadius: 1,
                    backgroundColor: 'hsl(220, 8%, 23%)',
                    color: 'white',
                    boxShadow: 24,
                    paddingLeft: "-10rem"
                }}>

                <Box
                    sx={{
                        marginLeft: "1rem",
                        marginTop: "1rem"
                    }}
                >
                    <h3>Log Out</h3>
                </Box>

                <Box
                    sx={{
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        marginBottom: '3rem', 
                        fontSize: '14px',
                        color: 'hsl(270, 2%, 74%)'                      

                    }}
                >
                    <h5
                    className='logout_h5'>
                        Are you sure want to log out?</h5>
                </Box>

                <Box
                    sx={{
                        backgroundColor: "hsl(225, 8%, 20%)",
                        width: '100%',
                        display: 'flex',
                        justifyContent: "flex-end",
                        padding: "1rem",

                    }}
                >
                    <button
                        sx={{

                        }}
                        className='buttonRed'
                        onClick={backlogin}
                        >
                        Log Out
                    </button>
                </Box>
            </Box>
        </Modal>
    );
});

export default LogoutDialog;