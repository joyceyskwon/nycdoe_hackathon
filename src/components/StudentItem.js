import React, { Component } from 'react';

class StudentItem extends Component {

  render() {
    return (
      <div>
        <h3>Student ID: {this.props.studentId}</h3>
        <p>Gender: {this.props.Gender}</p>
        <p>Race: {this.props.Race}</p>
        <p>Language: {this.props.Language}</p>
        <p>Math Score: {this.props.math_test}</p>
        <p>English Score: {this.props.english_test}</p>
      </div>
    )
  }
}

export default StudentItem
