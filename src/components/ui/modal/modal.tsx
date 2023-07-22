'use client';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CloseIcon from '@/assets/icons/close.svg';

const BootstrapDialog = styled(Dialog)(({ theme }) => {
  console.log(theme.palette.background.default);
  return {
    '& .MuiPaper-root': {
      backgroundColor: `${theme.palette.background.paper} !important`,
    },
    '& .MuiBackdrop-root': {
      backdropFilter: 'blur(2px)',
    },
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  };
});

export interface DialogTitleProps {
  id: string;
  children?: ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon width='24px' height='24px' />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export function Modal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={true}>
      <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
        Modal title
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant='contained' onClick={handleClose}>
          Save
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
