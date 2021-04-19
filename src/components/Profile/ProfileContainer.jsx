import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setCancelVisitTC} from '../../redux/reducers/profile-reducer';

class ProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visits: state.profile.visits
  }
}


export default connect(mapStateToProps,{setCancelVisitTC})(ProfileContainer)