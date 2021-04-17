import React from 'react';
import Navigation from './Navigation';
import {connect} from 'react-redux';

class NavigationContainer extends React.Component {
  render() {
    return (
      <div>
        <Navigation {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps,{})(NavigationContainer)