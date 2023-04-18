import * as React from 'react'

import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

export const CustomTable = ({ headerCells, rows }: any) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={{ width: '100%', border: '1px solid #e0e0e0' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerCells.map((cell: any) =>
              cell.id === 'actions' ? (
                <TableCell key={cell.id} align="center" sx={{ fontWeight: 'bold' }} colSpan={2}>
                  {cell.label}
                </TableCell>
              ) : (
                <TableCell key={cell.id} align="left" sx={{ fontWeight: 'bold' }}>
                  {cell.label}
                </TableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: { class_id: number; class_name: string; class_description: string }, index: number) => (
            <TableRow key={row.class_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.class_name}</TableCell>
              <TableCell align="left">{row.class_description}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit">
                  <AiOutlineEdit />
                </IconButton>
              </TableCell>
              <TableCell align="left">
                <IconButton aria-label="delete">
                  <AiOutlineDelete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
