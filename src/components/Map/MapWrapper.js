import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfoBox from 'components/InfoBox/InfoBox';
import AddMarkerPopup from 'components/AddMarkerPopup/AddMarkerPopup';
import { fetchMarkers } from 'actions/markers';
import fire from 'fire';
import Map from './Map';

class MapWrapper extends React.Component {
  state = {
    infoToggle: false,
    activeMarker: '',
    newMarkersPosition: '',
    showModal: false,
    detectNewMarkersPosition: false,
    markersData: [],
  };
  componentDidMount() {
    this.props.fetchMarkers();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      markersData: nextProps.markers,
    });
  }
  getNewMarkersPosition = event => {
    if (this.state.detectNewMarkersPosition) {
      const pos = event.latLng;
      const lat = pos.lat();
      const lng = pos.lng();
      this.setState({
        newMarkersPosition: { lat, lng },
        showModal: true,
      });
    }
  };
  initNewMarkersPositionDetection = () => {
    this.setState({
      detectNewMarkersPosition: !this.state.detectNewMarkersPosition,
      showModal: false,
    });
  };
  addMarker = (id, name, author, date, description, icon, photos) => {
    const markers = this.state.markersData;
    markers.push({
      id,
      position: this.state.newMarkersPosition,
      name,
      author,
      date,
      description,
      icon,
      photos,
    });
    this.setState({
      markersData: markers,
    });
    fire
      .database()
      .ref('markers')
      .set(markers);
  };
  infoToggle = id => {
    this.setState({
      infoToggle: true,
      activeMarker: id,
    });
  };
  render() {
    return (
      <div>
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: 'calc(100vh - 60px)' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.state.markersData}
          infoToggle={this.infoToggle}
          getNewMarkersPosition={this.getNewMarkersPosition}
        />

        {this.state.infoToggle
          ? this.state.markersData.map(marker => {
              if (marker.id === this.state.activeMarker) {
                return <InfoBox key={marker.id} marker={marker} />;
              }
              return '';
            })
          : ''}
        <AddMarkerPopup
          showModal={this.state.showModal}
          addMarker={this.addMarker}
          markers={this.state.markersData}
          initNewMarkersPositionDetection={this.initNewMarkersPositionDetection}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fetching: state.markers.fetching, markers: state.markers.markers };
}

MapWrapper.propTypes = {
  fetchMarkers: PropTypes.func.isRequired,
  markers: PropTypes.node.isRequired,
};

export default connect(mapStateToProps, { fetchMarkers })(MapWrapper);
