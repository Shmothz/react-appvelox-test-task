import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.profile.userData
  }
}

export default connect(mapStateToProps,{})(HeaderContainer)