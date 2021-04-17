import './App.css';
import NavigationContainer from './components/Navigation/NavigationContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MyVisitsContainer from './components/MyVisits/MyVisitsContainer';
import { Route, withRouter } from "react-router-dom";
import {compose} from 'redux';
import {connect} from 'react-redux';

function App() {
  return <div>
    <NavigationContainer />
    <HeaderContainer />
    <div>
      <Route exact path='/profile' render={() => <ProfileContainer />} />
      <Route path='/profile/visits' render={() => <MyVisitsContainer />} />
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {})
)(App);
