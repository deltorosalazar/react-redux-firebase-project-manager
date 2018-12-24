import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const ProjectDetails = props => {
  const id = props.match.params.id

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mb-4">{id} - Project Title</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dignissimos consequuntur vel, atque totam ab dolores officia
            voluptatibus deserunt, maiores dicta quidem error sed voluptatem eos
            voluptatum expedita quam repellendus.
          </h4>
          <hr />
          <h5>Posted by Manuel F. Del Toro</h5>
          <h5>Decemeber 24, 2018</h5>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectDetails
