import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

const Side = () => {
  return (
    <div className='main_div'>
<div className='side_bar_section'>
<span className='header_1'>PipeLine</span>
<Navbar className="bg-body-tertiary side">
    
        <Container>
        <Dropdown>
      <Dropdown.Toggle className='dd_sb_1' variant="success" id="dropdown-basic">
        Sales Pipelines
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Container>
      </Navbar>
      <br />
      <span className='header_1'>View</span>
      <Navbar className="bg-body-tertiary side">
        <Container >
        <Dropdown >
      <Dropdown.Toggle className='dd_sb_1' variant="success" id="dropdown-basic">
        All Deals
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Container>
      </Navbar>
      <br />
      <ul className='last_div'>
      <li><span className='text_12'>84 Deals</span></li>
      <li><Button className='last_button'>Add Filter</Button></li>
      <br />
      </ul>
      
    </div>
    <div className='card_section-div'>

    </div>
    </div>
  )
}

export default Side