import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Button, Modal, Form, Input, Icon, Upload } from 'antd';
import { sendPhotosUrl } from 'consts';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './AddMarker.sass';

const { TextArea } = Input;

class AddMarkerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      username: null,
      markerName: null,
      date: new Date()
        .toISOString()
        .replace('-', '/')
        .split('T')[0]
        .replace('-', '.'),
      markerId: null,
      icon: null,
      description: null,
      fileList: [],
      photos: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal,
      markerId: nextProps.markers.length + 1,
      username: nextProps.username,
    });
  }
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  onFileChange = ({ fileList }) => {
    const photos = [];
    fileList.map(photo => {
      photos.push(photo.thumbUrl);
      return null;
    });
    this.setState({ fileList, photos });
  };
  initUserChooseLocation = () => {
    this.toggleModal();
    this.props.initNewMarkersPositionDetection();
  };
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ username: null });
  };
  handleOk = () => {
    const {
      markerId,
      markerName,
      username,
      date,
      description,
      icon,
      photos,
    } = this.state;
    if (this.state.photos.length < 1) {
      // alert('Add at least 1 photo');
    } else {
      this.props.addMarker(
        markerId,
        markerName,
        username,
        date,
        description,
        icon,
        photos,
      );
      this.initUserChooseLocation();
      this.setState({
        username: null,
        markerName: null,
        description: null,
      });
    }
  };
  handleCancel = () => {
    this.setState({
      showModal: false,
    });
    this.initUserChooseLocation();
  };
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { description, showModal, fileList } = this.state;
    const props = {
      action: sendPhotosUrl,
      listType: 'picture',
      className: 'upload-list',
    };
    return (
      <Modal
        className={styles.addMarkerModal}
        visible={showModal}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form>
          <TextArea
            rows={4}
            placeholder="Enter description"
            value={description}
            onChange={this.onChangeDescription}
          />
          <Button
            onClick={this.initUserChooseLocation}
            className={styles.addLocationButton}
          >
            <Icon type="pushpin" /> choose location
          </Button>
          <Upload {...props} fileList={fileList} onChange={this.onFileChange}>
            <Button>
              <Icon type="upload" /> upload your photos
            </Button>
          </Upload>
        </Form>
      </Modal>
    );
  }
}

AddMarkerModal.propTypes = {
  initNewMarkersPositionDetection: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  addMarker: PropTypes.func.isRequired,
  markers: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    username: state.userData.username,
  };
}

export default compose(withStyles(styles), connect(mapStateToProps))(
  AddMarkerModal,
);
