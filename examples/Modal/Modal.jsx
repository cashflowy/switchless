'use client'
import * as React from 'react';
import {Modal,ModalDialog} from '@mui/joy';
import {DialogTitle,DialogContent} from '@mui/joy';

// import Link from '@/components/Switchless/Link';
import Link from '@mui/joy/Link' 

function ModalContent(){
  return (
    <>
      <DialogTitle>Cycle Time Calculation</DialogTitle>
      <DialogContent>for part 123123123.</DialogContent>
    </>
  )
}

export default function ModalLink({}) {

  const [open, setOpen] = React.useState(false); // used to open or close the modal
  return (
    <>
      <Link
        onClick={(event) => {
          // event.preventDefault();
          // alert('yo');
          setOpen(true)
        }}
        >Click to open modal</Link>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <ModalContent/>
          
        </ModalDialog>
      </Modal>
    </>
  );
}
