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
      frl_input: parseInt(e.target.value)
    })
  }

  // handleFRLValueSubmit = e => {
  //   e.preventDefault()
  //   if(this.state.frl_input > 0) {
  //     this.setState({
  //       result: Math.round(0.74/this.state.frl_input)
  //     })
  //   } else {
  //     return null
  //   }
  // }

  handleFRLValueSubmit = e => {
    // e.preventDefault()
    if(e.target.value > 0) {
      this.setState({
        result: Math.round(0.74/e.target.value)
      })
    } else {
      return null
    }
  }

  receiveFRLValue = () => {
    return (
      <select onChange={this.handleFRLValueSubmit}>
        <option value="0.25">Beacon: 25% FRL</option>
        <option value="0.9">Bronx Academy of Letters: 90% FRL</option>
        <option value="0.21">Eleanor Roosevelt H.S: 21% FRL</option>
        <option value="0.43">Leon M Goldstein H.S: 43% FRL</option>
        <option value="0.425">Millennium Brooklyn H.S: 42.5% FRL</option>
      </select>
      // <form >
      //   <input
      //     onChange={this.handleFRLValueChange}
      //     name="frl_input"
      //     type="number"
      //     value={this.state.frl_input}
      //     placeholder="enter a frl number"
      //   />
      //   <input onClick={e=>this.handleFRLValueSubmit(e)} type="submit" name="submit"/>
      // </form>
    )
  }

  render() {
    console.log(this.state.frl_input);
    return (
      <div>
        {this.props.students.length > 0 ?
          this.renderStats()
        :
          null
        }
        {this.receiveFRLValue()}
        {this.state.result > 0 ?
          <p>Multiplier: {this.state.result*100}%</p>
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
