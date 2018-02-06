import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Icon, Upload } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { sendPhotosUrl } from 'constants';
import styles from './AddMarkerPopup.sass';

const { TextArea } = Input;

class AddMarkerPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      userName: '',
      markerName: '',
      date: new Date()
        .toISOString()
        .replace('-', '/')
        .split('T')[0]
        .replace('-', '.'),
      markerId: '',
      icon: '',
      description: '',
      fileList: [],
      photos: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal,
      markerId: nextProps.markers.length + 1,
    });
  }
  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };
  onChangeMarkerName = e => {
    this.setState({ markerName: e.target.value });
  };
  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };
  onFileChange = ({ fileList }) => {
    const photos = [];
    fileList.map(photo => {
      photos.push(photo.thumbUrl);
      return '';
    });
    this.setState({ fileList, photos });
  };
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  initUserChooseLocation = () => {
    this.toggleModal();
    this.props.initNewMarkersPositionDetection();
  };
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  };
  handleOk = () => {
    const {
      markerId,
      markerName,
      userName,
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
        userName,
        date,
        description,
        icon,
        photos,
      );
      this.initUserChooseLocation();
      this.setState({
        userName: '',
        markerName: '',
        description: '',
      });
    }
  };
  render() {
    const { description, showModal, fileList } = this.state;
    const props = {
      action: sendPhotosUrl,
      listType: 'picture',
      className: 'upload-list',
    };
    return (
      <div>
        <Button
          shape="circle"
          icon="plus"
          size="large"
          onClick={this.toggleModal}
          className={styles.addMarkerButton}
        />
        <Modal
          className={styles.addMarkerModal}
          visible={showModal}
          onOk={this.handleOk}
          onCancel={this.toggleModal}
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
              style={{ marginRight: '10px' }}
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
      </div>
    );
  }
}

AddMarkerPopup.propTypes = {
  initNewMarkersPositionDetection: PropTypes.func.isRequired,
  addMarker: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  markers: PropTypes.node.isRequired,
};

export default withStyles(styles)(AddMarkerPopup);
