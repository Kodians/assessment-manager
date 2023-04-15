import React from 'react'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const style = (size: string | undefined) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: size === 'small' ? 350 : size === 'medium' ? 600 : 800,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  maxHeight: '90vh',
})

interface SharedModalProps {
  open?: boolean
  closeModal?: () => void
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
}

export const SharedModal = ({ open, closeModal, size, children }: SharedModalProps) => {
  return (
    <div>
      <Modal
        keepMounted
        open={open || false}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style(size)}>
          {children || (
            <>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  )
}
