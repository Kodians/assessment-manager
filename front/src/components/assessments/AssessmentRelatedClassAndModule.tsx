import React from 'react'

// import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { MdOutlineDeleteOutline } from 'react-icons/md'

export const AssessmentRelatedClassAndModule = () => {
  const [showDeleteIcon, setShowDeleteIcon] = React.useState(false)
  const [itemHovered, setItemHovered] = React.useState(0)

  const handleMouseEnter = (index: number) => {
    setShowDeleteIcon(true)
    setItemHovered(index)
  }

  const handleMouseLeave = (index: number) => {
    setShowDeleteIcon(false)
    setItemHovered(index)
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 370,
        bgcolor: 'background.paper',
        overflowY: 'scroll',
        overflowX: 'hidden',
        maxHeight: 420,
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index, arr) => (
        <ListItem
          key={value}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          secondaryAction={
            showDeleteIcon && itemHovered === index ? (
              <IconButton aria-label="comment" onClick={() => console.log('delete')}>
                <MdOutlineDeleteOutline />
              </IconButton>
            ) : null
          }
          divider={index !== arr.length - 1}
          sx={{ '&:hover': { bgcolor: '#e0e0e0' }, cursor: 'pointer', mt: 1, mb: 1, minWidth: 302 }}
        >
          <ListItemText primary={`Master ${value} Miage APP`} secondary={`Lundi 12/12/2021`} />
        </ListItem>
      ))}
    </List>
  )
}
