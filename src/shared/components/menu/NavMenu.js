import React from 'react'
import MenuItem from './MenuItem'

const NavMenu = () => (
  <React.Fragment>
    <MenuItem route="/render-pdf">Render PDF</MenuItem>
    <MenuItem route="/render-pdf-modal">Render Modal PDF</MenuItem>
    <MenuItem route="/upload-file">Upload File</MenuItem>
    <MenuItem route="/modal">Modal</MenuItem>
    <MenuItem route="/geolocation">Geolocation</MenuItem>
  </React.Fragment>
)

export default NavMenu