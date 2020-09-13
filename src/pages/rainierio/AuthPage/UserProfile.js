import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { UserCard } from 'components/Card';
import user1Image from 'assets/img/users/100_1.jpg';
import Page from 'components/Page';
import { 
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Collapse,
  Fade,
  Form,
  Label,
  Input,
  Row,
  FormGroup,
  CardHeader,
  CardBody, } from 'reactstrap';

//import custom component

//import 3rd party component

// import actions
import { loadUserProfile, updateProfile, updateField } from "./AuthActions"

class UserProfile extends React.Component {
  state = {
    isOpen: false,
    isAlertOpen: false
  }

  componentDidMount(){
    this.props.loadUserProfile(this.props.userAuth.userEmail)
  }

  submitUpdate = (e) => {
    const userUpdate = {
      userEmail: this.props.userAuth.userEmail,
      userName: this.props.userAuth.userName,
      firstName: this.props.userAuth.firstName,
      lastName: this.props.userAuth.lastName,
      currentPassword: this.props.userAuth.currentPassword,
      newPassword: this.props.userAuth.newPassword,
      repeatNewPassword: this.props.userAuth.repeatNewPassword
    }
    
    this.props.updateProfile(userUpdate)
    e.preventDefault()
  }

  toggle = () => this.setState({isOpen:!this.state.isOpen})

  onDismiss = () => this.setState({isAlertOpen:!this.state.isAlertOpen})

  handleChange = e => {
    this.props.updateField(e.target.name, e.target.value)
  };

  render() {
    const { userName, userEmail, firstName, lastName, userUpdateRes } = this.props.userAuth
  
    return (
      <Fade in={true}>
        <Page title="User Profile" breadcrumbs={[{ name: 'User Profile', active: true }]}>
          <Row style={{justifyContent: "center", alignItems: "center"}}>
            <Col xl={8} lg={12} md={12}>
              <Card>
                <CardHeader> User Profile</CardHeader>
                <CardBody>
                  <Form>
                    <UserCard
                      avatar={user1Image}
                      title= {userName}
                      subtitle={firstName + ' ' + lastName}
                      text={userEmail}
                      style={{
                        height: 300,
                      }}
                    />
                    <Alert color="success" isOpen={userUpdateRes ? true : false} toggle={this.onDismiss} style={{marginTop: "20px"}}>
                        {userUpdateRes}
                    </Alert>
                    <FormGroup>
                      <Label for="userName">Username</Label>
                      <Input
                        type="text"
                        name="userName"
                        onChange={this.handleChange}
                        value={userName}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="firstName">First Name</Label>
                      <Input
                        type="text"
                        name="firstName"
                        onChange={this.handleChange}
                        value={firstName}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input
                        type="text"
                        name="lastName"
                        onChange={this.handleChange}
                        value={lastName}
                      />
                    </FormGroup>
                    <Badge href="#changepassword" onClick={this.toggle} color="muted">Change Password</Badge>{''}
                    <Collapse isOpen={this.state.isOpen}>
                      <FormGroup>
                        <Label for="currentPassword">
                          Current Password
                        </Label>
                        <Input
                          type="password"
                          name="currentPassword"
                          placeholder="Current password"
                          onChange={this.handleChange}
                        />
                      </FormGroup>{' '} 
                      <FormGroup>
                        <Label for="newPassword">
                          New Password
                        </Label>
                        <Input
                          type="password"
                          name="newPassword"
                          placeholder="New password"
                          onChange={this.handleChange}
                        />
                      </FormGroup>{' '} 
                      <FormGroup tag="changepassword">
                        <Label for="repeatNewPassword">
                          Repeat New Password
                        </Label>
                        <Input
                          type="password"
                          name="repeatNewPassword"
                          placeholder="Repeat new password"
                          onChange={this.handleChange}
                        />
                      </FormGroup>{''}
                    </Collapse>
                    <Button onClick={this.submitUpdate} outline color="success" size="sm" style={{marginTop: "20px", float: "right"}}>
                      Save
                    </Button>
                    <Button onClick={() => this.props.history.push('/')} outline color="info" size="sm" style={{marginTop: "20px", marginRight: "20px", float: "right"}}>
                      Back
                    </Button> 
                  </Form>  
                </CardBody>  
              </Card>
            </Col>
          </Row>
        </Page>
      </Fade>
    );
  }
}

// register prop types for the class
UserProfile.propTypes = {
  userAuth: PropTypes.object.isRequired,
  loadUserProfile: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired
};

//map the state into props
const mapStateToProps = state => (
  { 
    userAuth: state.userAuth
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    // action creator
    loadUserProfile,
    updateProfile,
    updateField
  }, dispatch)
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(UserProfile);
