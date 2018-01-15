import React from 'react'
import PropTypes from 'prop-types'
import Map from '../components/Map'
import InfoBox from '../components/InfoBox'
import AddMarker from './AddMarker'

class MapWrapper extends React.Component {
  state = {
    infoToggle: false,
    activeMarker: '',
    markersData:[
      {
        id:1,
        position:{ lat: -34.497, lng: 150.944 },
        name: 'Marker 1',
        author: 'Jhon Dou',
        date: '12.12.2017',
        description:'In computer programming, a placeholder is a character, word, or string of characters that may be used to take up space until such a time that the space is needed.',
        icon:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        photos:['https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1482920387559-08269818bcfc?auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1496153615838-861aed350146?auto=format&fit=crop&w=1090&q=80',
        'https://images.unsplash.com/photo-1496297485239-4265d2ba2105?auto=format&fit=crop&w=1220&q=80',
        'https://images.unsplash.com/photo-1483119624769-b1a73c256500?auto=format&fit=crop&w=1046&q=80',
        'https://images.unsplash.com/photo-1506706907212-709cf5fd7f06?auto=format&fit=crop&w=1050&q=80']
      },
      {
        id:2,
        position:{ lat: -34.337, lng: 150.644 },
        name: 'Marker 2',
        author: 'Peter Till',
        date: '10.08.2017',
        description:'Alternatively referred to as dummy text or filler text, placeholder text is text that is used to preview fonts, spoof an e-mail spam filter',
        icon:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        photos:['https://images.unsplash.com/photo-1482920387559-08269818bcfc?auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1483119624769-b1a73c256500?auto=format&fit=crop&w=1046&q=80',
        'https://images.unsplash.com/photo-1496153615838-861aed350146?auto=format&fit=crop&w=1090&q=80',
        'https://images.unsplash.com/photo-1496297485239-4265d2ba2105?auto=format&fit=crop&w=1220&q=80',
        'https://images.unsplash.com/photo-1506706907212-709cf5fd7f06?auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=1050&q=80']
      }
    ]
  }
  infoToggle = (id) => {
    this.setState({
      infoToggle: true,
      activeMarker: id
    })
  }
  getNewMarkersPosition = (event) => {
      var pos = event.latLng
      console.log(pos);
  }
  addMarker = (id,position, name, author, date, description, icon) =>{
    console.log(position);
  }

  render () {
      return (
        <div>
        <Map isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: 'calc(100vh - 60px)'}} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers = {this.state.markersData}
          infoToggle={this.infoToggle}
          getNewMarkersPosition={this.getNewMarkersPosition}
          addMarker={this.addMarker}/>

  {this.state.infoToggle ?
   this.state.markersData.map(marker => {
     if(marker.id === this.state.activeMarker){
     return(<InfoBox key={marker.id} marker={marker} />)
   }
   })
   :''}
   <AddMarker/>
 </div>
      )
  }
}

export default MapWrapper;
