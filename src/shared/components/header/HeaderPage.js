import React from 'react'
import HeaderTemplate from './HeaderTemplate'

class HeaderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavbarOpen: false,
    }
  }

  toggleNavbar = () => {
    this.setState(prev => ({ isNavbarOpen: !prev.isNavbarOpen }))
  }


  render() {
    const { isNavbarOpen } = this.state
    return (
      <HeaderTemplate
        isNavbarOpen={isNavbarOpen}
        handleNavbarToggle={this.toggleNavbar}
      />
    )
  }
}

export default HeaderPage