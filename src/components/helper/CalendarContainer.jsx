import React from 'react';
import Calendar from 'react-calendar';
import {connect} from 'react-redux';
import 'react-calendar/dist/Calendar.css';

const CalendarContainer = ({visits}) => {

  return <Calendar
    next2Label={null}
    prev2Label={null}
  />
}

const mapStateToProps = state => {
  return {
    visits: state.profile.visits
  }
}

export default connect(mapStateToProps, {})(CalendarContainer)