import React from 'react';
import MyVisits from './MyVisits';
import {connect} from 'react-redux';

class MyVisitsContainer extends React.Component {
  render() {
    return (
      <div>
        <MyVisits {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visits: state.profile.visits
  }
}

export default connect(mapStateToProps,{})(MyVisitsContainer)