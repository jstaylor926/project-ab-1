import * as React from 'react'
import Box from '@mui/material/Box'
import { LayoutContainer } from './styles'

function Layout({children}: any) {
  return (
    <LayoutContainer>
        {children}
    </LayoutContainer>
  )
}

export default Layout