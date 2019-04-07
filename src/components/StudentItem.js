import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class StudentItem extends Component {

  render() {
    return (
      <div>
      <Card>
        <Image src='https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1' alt="default"/>
        <Card.Content>
          <Card.Header>Student ID: {this.props.studentId}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.Gender}</span>
            <span className='date'>{this.props.Race}</span>
          </Card.Meta>
          <Card.Description>Language: {this.props.Language}, Math Score: {this.props.math_test}, English Score: {this.props.english_test}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
      </div>
    )
  }
}

export default StudentItem
