import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Button, Icon, Modal, Divider } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './InfoBox.sass';

class InfoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: null,
    };
  }
  handlePreview = src => {
    this.setState({
      previewImage: src,
      previewVisible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      previewVisible: false,
    });
  };
  render() {
    return (
      <Card
        className={styles.infoBox}
        key={this.props.marker.id}
        title={this.props.marker.name}
        bordered
      >
        <div className={styles.markermeta}>
          <span>{`@${this.props.marker.author}`}</span>
          <span className={styles.markerDate}>{this.props.marker.date}</span>
        </div>
        <div className="marker-content">
          <p>{this.props.marker.description}</p>
        </div>
        <Divider />
        <Row gutter={3} className={styles.markerphotos}>
          {this.props.marker.photos.map(url => (
            <Col span={8}>
              <div
                className="gallery-img-wrapper"
                key={url.slice(0, 20)}
                onClick={() => this.handlePreview(url)}
                role="presentation"
              >
                <img alt="img" src={url} />
              </div>
            </Col>
          ))}
        </Row>
        <Button className={styles.addMorePhotosButton}>
          <Icon type="plus" /> add a photo
        </Button>

        <Modal
          visible={this.state.previewVisible}
          cancelText=""
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" src={this.state.previewImage} />
          <span>@danikfedirko</span>
        </Modal>
      </Card>
    );
  }
}

InfoBox.propTypes = {
  marker: PropTypes.node.isRequired,
};

export default withStyles(styles)(InfoBox);
