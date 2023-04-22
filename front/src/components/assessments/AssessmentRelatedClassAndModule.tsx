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
      {[
        { name: 'Miage M2 - Alternance' },
        { name: 'Miage M2 - Formation Initiale' },
        { name: 'Miage M1 - Alternance' },
      ].map((item, index, arr) => (
        <ListItem
          key={item.name}
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
          <ListItemText primary={item.name} secondary={`Lundi 12/12/2021`} />
        </ListItem>
      ))}
    </List>
  )
}
