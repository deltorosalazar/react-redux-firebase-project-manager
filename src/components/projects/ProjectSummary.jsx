import React from 'react'
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'

const ProjectSummary = ({ project }) => {
  return (
    <Card className="mb-4">
      <CardHeader>{project.title}</CardHeader>
      <CardBody>
        <CardText>{project.content}</CardText>
        <Button>Go somewhere</Button>
      </CardBody>
    </Card>
  )
}

export default ProjectSummary
