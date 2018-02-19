import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfoBox from 'components/InfoBox';
import AddMarker from 'components/AddMarker';
import { fetchMarkers } from 'actions/markersActions';
import { setData } from 'services/dbService';
import { googleMapUrl } from 'consts';
import Map from './Map';

class MapWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoToggle: false,
      activeMarker: null,
      newMarkersPosition: null,
      showModal: false,
      detectNewMarkersPosition: false,
      isLoggedIn: false,
      markersData: [],
    };
  }
  componentDidMount() {
    this.props.fetchMarkers();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      markersData: nextProps.markers,
      isLoggedIn: nextProps.isLoggedIn,
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
  getInfoBox = () => {
    const { markersData, activeMarker } = this.state;
    let infoBox = '';
    const singleMarker = markersData.filter(
      marker => marker.id === activeMarker,
    );
    if (singleMarker) {
      infoBox = <InfoBox key={singleMarker.id} marker={singleMarker[0]} />;
    }
    return infoBox;
  };
  getAddMarkerButton = () => {
    const { showModal, markersData } = this.state;
    return (
      <AddMarker
        showModal={showModal}
        addMarker={this.addMarker}
        markers={markersData}
        initNewMarkersPositionDetection={this.initNewMarkersPositionDetection}
      />
    );
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
    setData('markers', markers);
  };
  infoToggle = id => {
    this.setState({
      infoToggle: true,
      activeMarker: id,
    });
  };
  render() {
    const { infoToggle, isLoggedIn } = this.state;
    return (
      <div>
        <Map
          isMarkerShown
          googleMapURL={googleMapUrl}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: 'calc(100vh - 60px)' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.state.markersData}
          infoToggle={this.infoToggle}
          getNewMarkersPosition={this.getNewMarkersPosition}
        />
        {infoToggle ? this.getInfoBox() : null}
        {isLoggedIn ? this.getAddMarkerButton() : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.markers.fetching,
    markers: state.markers.markers,
    isLoggedIn: state.userData.isLoggedIn,
  };
}

MapWrapper.propTypes = {
  fetchMarkers: PropTypes.func.isRequired,
  markers: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { fetchMarkers })(MapWrapper);
