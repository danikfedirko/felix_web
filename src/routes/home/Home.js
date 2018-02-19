import React from 'react';
import PropTypes from 'prop-types';
import MapWrapper from 'components/Map/MapWrapper';
import getInstagramUserData from 'services/instagramLoginService';
import { connect } from 'react-redux';
import { loginAction } from 'actions/loginActions';
import history from '../../history';

class Home extends React.Component {
  componentWillMount = () => {
    if (history.location) {
      const pathHash = history.location.hash;

      if (pathHash.includes('access_token')) {
        const token = pathHash.replace('#access_token=', '');
        getInstagramUserData(token).then(response => {
          this.props.loginAction(response, 'instagram');
        });
      }
    }
  };
  render() {
    return (
      <section>
        <MapWrapper />
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

Home.propTypes = {
  loginAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loginAction })(Home);
