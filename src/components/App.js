import React, { Component } from 'react';
import './App.css';
import data from '../nycdoe_data.json'
import StudentList from './StudentList'
import Filters from './Filters'

class App extends Component {

  state = {
    students: [],
    filteredStudents: []
  }

  componentDidMount() {
    this.getStudentData()
  }

  getStudentData = () => {
    this.setState({
      students: data
    })
  }

  filterSWDStudents = e => {
    if(e.target.value === "swd") {
      let filteredStudents = this.state.students.filter(s => {
        return s.Ability === "SWD"
      })
      this.setState({ filteredStudents })
    } else {
      let filteredStudents = this.state.students.filter(s => {
        return s.Ability === "Not SWD"
      })
      this.setState({ filteredStudents })
    }
  }

  filterFRLStudents = e => {
    if(e.target.value === "yes") {
      let filteredStudents = this.state.students.filter(s => {
        return s.frl_boolean === true
      })
      this.setState({ filteredStudents })
    } else {
      let filteredStudents = this.state.students.filter(s => {
        return s.frl_boolean === false
      })
      this.setState({ filteredStudents })
    }
  }

  filterByMathScore = e => {
    if(e.target.value === 1) {

    }
  }

  render() {
    return (
      <div className="App">
        <h1>Student Data</h1>
        <p>NYC FRL consensus is 74%</p>
        <img src="http://www.educationplanner.org/images/landing-page/promo-students.jpg" alt="high_school_students"/>
        <Filters
          filterSWDStudents={this.filterSWDStudents}
          filterByMathScore={this.filterByMathScore}
          filterFRLStudents={this.filterFRLStudents}
        />
        <StudentList
          students={this.state.filteredStudents}
        />
      </div>
    );
  }
}

export default App;
