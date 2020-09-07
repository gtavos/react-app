import React, { Component } from 'react';

class SampleGeolocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude : null,
      longitude :null
    }

    this.diplayGeolocation = this.diplayGeolocation.bind(this);
    this.geolocation = this.geolocation.bind(this);
  }

  componentDidMount() {
    this.diplayGeolocation()
  }

  diplayGeolocation(){    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geolocation);   
    }
  }

  geolocation(position){
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);

    this.setState({
      latitude : position.coords.latitude,
      longitude : position.coords.longitude
    })
  }

  render() {
    return (
      <div className="Example">
        <header>
          <h1>Geolocation sample page</h1>
        </header>

        <div className="Example__container__load">
            <label>Latitude is : </label> {this.state.latitude}
            <label>Longitude is : </label> {this.state.longitude}
        </div>        
      </div>
    );
  }
}

export default SampleGeolocation