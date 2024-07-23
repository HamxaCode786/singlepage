import React from "react";
import Nav from "react-bootstrap/Nav";
import { Form } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useState } from "react";
import Button from "react-bootstrap/Button";


const Second = () => {
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);

  return (
    <div className="outer_1">
      <div className="div-first">
        <div className="try_123">
          <div>
            <h2>Deals</h2>
          </div>
          <div>
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              <ToggleButton className="tbs2" id="tbg-btn-1" value={1}>
                Option 1
              </ToggleButton>

              <ToggleButton className="tbs2" id="tbg-btn-1 s2" value={3}>
                Option 3
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className="div-2">
        <div>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2hamza"
            aria-label="Search"
          />
        </div>
        <div>
          <Nav className="me-auto">
            <NavDropdown  title="Dropdown" id="basic-nav-dropdown" className="dd_s2">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <div>
          <Button className="button_ss2" variant="secondary" size="sm">
            Small button
          </Button>
        </div>
      </div>
      
        
      
    </div>
    
  );
};

export default Second;
