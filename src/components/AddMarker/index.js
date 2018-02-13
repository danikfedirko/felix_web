import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button } from 'antd';
import styles from './AddMarker.sass';
import AddMarkerModal from './AddMarkerModal';

class AddMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      markers: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal,
      markers: nextProps.markers,
    });
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  render() {
    const { addMarker, initNewMarkersPositionDetection } = this.props;
    const { showModal, markers } = this.state;
    return (
      <div>
        <Button
          shape="circle"
          icon="plus"
          size="large"
          onClick={this.toggleModal}
          className={styles.addMarkerButton}
        />
        <AddMarkerModal
          addMarker={addMarker}
          markers={markers}
          showModal={showModal}
          initNewMarkersPositionDetection={initNewMarkersPositionDetection}
        />
      </div>
    );
  }
}

AddMarker.propTypes = {
  initNewMarkersPositionDetection: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  markers: PropTypes.node.isRequired,
};

export default withStyles(styles)(AddMarker);
