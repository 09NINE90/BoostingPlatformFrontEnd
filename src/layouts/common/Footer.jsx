import React from 'react'
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box position="static" bottom={0} bgcolor={'bgColor.main'}
      sx={{display: "flex", justifyItems:'center', justifyContent:"center"}}
    >
      <Box>© 2016 - {new Date().getFullYear()} V-Boosting</Box>
    </Box>
  )
}

export default Footer