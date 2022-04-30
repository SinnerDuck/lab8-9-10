import React from 'react';

import {Accordion } from 'react-bootstrap';




const Blog = ()=>{
    return (


<>
<div className='div'>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Bio</Accordion.Header>
    <Accordion.Body>
      I'm Ilyas Zhanabayev from Kazakhstan. Nationality: Kazakh.
      
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>Graduation</Accordion.Header>
    <Accordion.Body>
    I received My higher education at IITU under the SIS educational program.
    </Accordion.Body>
  </Accordion.Item>


<Accordion.Item eventKey="2">
    <Accordion.Header>Soft Skills</Accordion.Header>
    <Accordion.Body>
    Leadership, Teamwork, Communication Skills, Work Ethic, Flexibility/Adaptability, Interpersonal Skills
    </Accordion.Body>
  </Accordion.Item>


<Accordion.Item eventKey="3">
    <Accordion.Header>Hard Skills</Accordion.Header>
    <Accordion.Body>
    Design creation, Concept development, Asset design, Graphic design software, Produce marketing proposals
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header>Languages</Accordion.Header>
    <Accordion.Body>
    Kazakh: native. Russian: C2. English: B2
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

</div>
</>

    )};

    export default Blog;