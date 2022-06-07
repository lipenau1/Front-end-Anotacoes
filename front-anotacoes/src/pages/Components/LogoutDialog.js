import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

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
                    borderRadius : 4,
                    backgroundColor: 'hsl(220, 8%, 23%)',
                    color: 'white',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                  }}>
                    <h1>Você tem certeza que deseja sair?</h1>

            </Box>
        </Modal>
    );
});

export default LogoutDialog;