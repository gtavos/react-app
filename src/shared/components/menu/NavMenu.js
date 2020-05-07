import React from 'react'
import MenuItem from './MenuItem'

const NavMenu = () => (
  <React.Fragment>
    <MenuItem route="/render-pdf">Render PDF</MenuItem>
    <MenuItem route="/upload-file">Upload File</MenuItem>
    <MenuItem route="/modal">Modal</MenuItem>
  </React.Fragment>
)

export default NavMenu