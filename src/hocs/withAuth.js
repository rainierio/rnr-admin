import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from 'redux';
import { setCurrentUser } from "../pages/rainierio/AuthPage/AuthActions"
import Cookies from "js-cookie"

function withAuthFunction(ComponentToProtect) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        tokenLoading: true,
        redirect: false,
      };
    }

    componentDidMount() {    
      let cookieValue = Cookies.get('USER_SESSION')
      if (cookieValue !== null) {
        fetch('/api/userauth/checktoken',)
        .then(res => res.json())
        .then(result => { 
          if (result.username !== null) {
            this.setState({ tokenLoading: false, redirect: false });
              // set current user
              if (this.props.userAuth.userName === null) {
                const userData ={
                  username: result.username,
                  email: result.email
                }
                this.props.setCurrentUser(userData)
              }
          } else {
            const error = new Error(result.error);
            throw error;
            }
          })
        .catch(err => {
          this.setState({ tokenLoading: false, redirect: true });
        }); 
      } else {
        this.setState({ tokenLoading: false, redirect: true });
      }
    }

    render() {
      const { tokenLoading, redirect } = this.state;
      if (redirect){
        return <Redirect to="/userauth" />;
      }
      if (tokenLoading) {
        return null;
      }

      return <ComponentToProtect {...this.props} />;
    }
  }
}

withAuthFunction.propTypes = {
  userAuth: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => (
  {
    userAuth: state.userAuth
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setCurrentUser    
  }, dispatch)
);

const withAuth = compose(connect(mapStateToProps, mapDispatchToProps), withAuthFunction);

export default withAuth;
