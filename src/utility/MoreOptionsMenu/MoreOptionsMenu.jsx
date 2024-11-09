import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Dropdown,
  MenuButton,
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/joy';
import MoreVertIcon from '@mui/icons-material/MoreVert';      // for MoreVertical
import EditIcon from '@mui/icons-material/Edit';              // for Edit
import DeleteIcon from '@mui/icons-material/Delete';  
        // for Trash
export default function MoreOptionsMenu({ 
  onEdit, 
  onDelete,
  itemName = 'item' // Used in delete confirmation message
}) {
  const [open, setOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEdit = () => {
    setOpen(false);
    onEdit?.();
  };

  const handleDelete = () => {
    setDeleteModalOpen(false);
    onDelete?.();
  };

  const handleDeleteClick = () => {
    setOpen(false);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <Dropdown open={open} onOpenChange={setOpen}>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
        >
          <MoreVertIcon />
        </MenuButton>
        <Menu placement="bottom-end" size="sm">
          <MenuItem onClick={handleEdit}>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem 
            color="danger" 
            onClick={handleDeleteClick}
          >
            <DeleteIcon />
            Delete
          </MenuItem>
        </Menu>
      </Dropdown>

      <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <DeleteIcon/>
            Confirm Delete
          </DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete this {itemName}? This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              color="danger"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </>
  );
}