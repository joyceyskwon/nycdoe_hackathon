import React, { Component } from 'react';
import StudentItem from './StudentItem'

class StudentList extends Component {
  constructor(){
    super()
    this.state = {
      frl_input: 0,
      result: 0
    }
  }

  renderStats = () => {
    return  (
      <div>
        <p>Number of Students: {this.props.students.length}</p>
        <p>Percentage: {Math.round((this.props.students.length/8000)*100)}%</p>
      </div>
    )
  }

  handleFRLValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFRLValueSubmit = e => {
    e.preventDefault()
    if(this.state.frl_input > 0) {
      this.setState({
        result: Math.round(0.74/this.state.frl_input)
      })
    } else {
      return null
    }
  }

  receiveFRLValue = () => {
    return (
      <form >
        <input
          onChange={this.handleFRLValueChange}
          name="frl_input"
          type="number"
          value={this.state.frl_input}
          placeholder="enter a frl number"
        />
        <input onClick={e=>this.handleFRLValueSubmit(e)} type="submit" name="submit"/>
      </form>
    )
  }

  render() {
    return (
      <div>
        {this.props.students.length > 0 ?
          this.renderStats()
        :
          null
        }
        {this.receiveFRLValue()}
        {this.state.result > 0 ?
          <p>Multiplier: {this.state.result}</p>
        :
          null
        }
        {this.props.students.map(student => {
          return <StudentItem
            key={student.studentId}
            {...student}
          />
        })}
      </div>
    )
  }

}

export default StudentList
