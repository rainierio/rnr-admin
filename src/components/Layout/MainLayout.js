import { Content, Footer, Header, Sidebar } from 'components/Layout';
import React from 'react';
import {
  MdImportantDevices,
  // MdCardGiftcard,
  MdLoyalty,
} from 'react-icons/md';
// import NotificationSystem from 'react-notification-system';
// import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';

import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

// import actions
import { userLogout } from "../../pages/rainierio/AuthPage/AuthActions"

class MainLayout extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open');
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    this.checkBreakpoint(this.props.breakpoint);
    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdImportantDevices />,
        message: 'Welome to Reduction Admin!',
        level: 'info',
      });
    }, 1500);

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdLoyalty />,
        message:
          'Reduction is carefully designed template powered by React and Bootstrap4!',
        level: 'info',
      });
    }, 2500);
  }

  // close sidebar when
  handleContentClick = event => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      MainLayout.isSidebarOpen() &&
      (this.props.breakpoint === 'xs' ||
        this.props.breakpoint === 'sm' ||
        this.props.breakpoint === 'md')
    ) {
      this.openSidebar('close');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (this.props.userAuth.isLogged === false) {
      return
    }

    if (openOrClose === 'open') {
        return document
          .querySelector('.cr-sidebar')
          .classList.add('cr-sidebar--open');
    }
    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
  }

  render() {
    const { children,userLogout  } = this.props;
    const userAuth = this.props.userAuth;
    return (
      <div>
        { userAuth.isLogged === true ?
          <main className="cr-app bg-light">
          <Sidebar />
          <Content fluid onClick={this.handleContentClick} >
            <Header user = {userAuth} userLogout={userLogout}/>
            {children}
            {/* <Footer /> */}
          </Content>
          
          {/* <NotificationSystem
            dismissible={false}
            ref={notificationSystem =>
              (this.notificationSystem = notificationSystem)
            }
            style={NOTIFICATION_SYSTEM_STYLE}
          /> */}
        </main>
        : <main>
            {children}
          </main>
        }
      </div>
    );
  }
}

// register prop types for the class
MainLayout.propTypes = {
  userLogout: PropTypes.func.isRequired,
  userAuth: PropTypes.object.isRequired
};

const mapStateToPtops = state => (
  {
    userAuth: state.userAuth
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({ 
    userLogout
  }, dispatch)
)

export default compose(connect(mapStateToPtops, mapDispatchToProps))(MainLayout);
