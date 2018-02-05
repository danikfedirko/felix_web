import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Icon, Upload } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AddMarkerPopup.sass';

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
    markerId: '1232',
    icon: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: '',
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal,
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
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
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
  handleOk = () => {
    this.props.addMarker(
      this.state.markerId,
      this.state.markerName,
      this.state.userName,
      this.state.date,
      this.state.description,
      this.state.icon,
    );
    this.initUserChooseLocation();
    this.setState({
      userName: '',
      markerName: '',
      description: '',
    });
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
      action: '//jsonplaceholder.typicode.com/posts/',
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
          className={s.addMarkerModal}
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
            <Upload {...props}>
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
};

export default withStyles(s)(AddMarkerPopup);
