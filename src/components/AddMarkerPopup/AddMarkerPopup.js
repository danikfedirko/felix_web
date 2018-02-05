import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Icon, Upload } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './AddMarkerPopup.sass';

const { TextArea } = Input;

class AddMarkerPopup extends React.Component {
  state = {
    showModal: false,
    userName: '',
    markerName: '',
    date: new Date()
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '.'),
    markerId: '',
    icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '',
    fileList: [],
    photos: [],
  };
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
    if (this.state.photos.length < 1) {
      // alert('Add at least 1 photo');
    } else {
      this.props.addMarker(
        this.state.markerId,
        this.state.markerName,
        this.state.userName,
        this.state.date,
        this.state.description,
        this.state.icon,
        this.state.photos,
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
    const { userName, markerName, description } = this.state;
    const suffix1 = userName ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    const suffix2 = markerName ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    const props = {
      action: 'https://felix-167d8.firebaseio.com/markers',
      listType: 'picture',
      className: 'upload-list',
    };
    return (
      <div>
        <Button
          style={{ position: 'absolute', left: '20px', bottom: '50px' }}
          shape="circle"
          icon="plus"
          size="large"
          onClick={this.toggleModal}
        />
        <Modal
          className={styles.addMarkerModal}
          visible={this.state.showModal}
          onOk={this.handleOk}
          onCancel={this.toggleModal}
        >
          <Form>
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix1}
              value={userName}
              onChange={this.onChangeUserName}
            />
            <Input
              placeholder="Enter name of marker"
              prefix={
                <Icon type="pushpin-o" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              suffix={suffix2}
              value={markerName}
              onChange={this.onChangeMarkerName}
            />
            <TextArea
              rows={4}
              placeholder="Enter description"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              value={description}
              onChange={this.onChangeDescription}
            />
            <Button
              onClick={this.initUserChooseLocation}
              style={{ marginRight: '10px' }}
            >
              <Icon type="pushpin" /> choose location
            </Button>
            <Upload
              {...props}
              fileList={this.state.fileList}
              onChange={this.onFileChange}
            >
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
