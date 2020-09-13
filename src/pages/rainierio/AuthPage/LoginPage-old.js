
import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Card, Col, Row } from 'reactstrap';
//import custom component

//import 3rd party component

// import actions
import { userLogin } from "./AuthActions"

class LoginPage extends React.Component {
  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/signup');
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              authState={this.props.authState}
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

// register prop types for the class
LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired
};

//map the state into props
const mapStateToProps = state => (
  { 
    
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    // action creator
  }, dispatch)
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(LoginPage);