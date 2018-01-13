import React from 'react'
import PropTypes from 'prop-types'
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

const Map = withScriptjs(withGoogleMap((props) =>
     <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
    {props.markers.map((marker,index)=> {
      return (
        <Marker key={index} position={marker.position} onClick={() => props.infoToggle(marker.id)}/>
      )
    })
    }
    </GoogleMap>
  ))
export default Map
