import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from 'react-notification-system-redux';

class NotificationComponent extends React.PureComponent {
  render() {
    const { notifications } = this.props;
    const style = {
      NotificationItem: {
        DefaultStyle: {
          margin: '10px 5px 2px 1px'
        },

        success: {
          color: 'red'
        }
      }
    };

    return (
      <Notifications
        notifications={notifications}
        style={style}
      />
    );
  }
}

NotificationComponent.contextTypes = {
  store: PropTypes.object
};

export default connect(state => ({ notifications: state.notifications }))(NotificationComponent);