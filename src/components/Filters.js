import React, { Component } from 'react';

class Filters extends Component {

  displaySWDSelect = () => {
    return (
      <div>
        <select onChange={e=>this.props.filterSWDStudents(e)}>
          <option value="">Is Student SWD?</option>
          <option value="swd">Yes</option>
          <option value="non_swd">No</option>
        </select>
      </div>
    )
  }

  displayFRLSelect = () => {
    return (
      <div>
        <select onChange={e=>this.props.filterFRLStudents(e)}>
          <option value="">Need FRL?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    )
  }

  displayMathScoreSelect = () => {
    return (
      <div>
        <select onChange={e=>this.props.filterByMathScore(e)}>
          <option value="">Please Select Math Score</option>
          <option value="2">2 or below</option>
          <option value="3">3 or higher</option>
        </select>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.displaySWDSelect()}
        {this.displayMathScoreSelect()}
        {this.displayFRLSelect()}
      </div>
    )
  }
}

export default Filters
