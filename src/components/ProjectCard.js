import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

export default class ProjectCard extends Component {
  state = {
      data: []
    }

  render() {
    return (
      <Link to={this.props.details.tag}><Card>
        <Card.Img variant="top" src={this.props.details.img} />
        <Card.Body>
          <Card.Title>{this.props.details.title}</Card.Title>
          <Card.Text>
            {this.props.details.desc}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p className="text-muted">DATE COMPLETED: {this.props.details.time}</p>
        </Card.Footer>
      </Card></Link>
    )
  }
}
