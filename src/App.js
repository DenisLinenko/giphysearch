import React from 'react';
import './App.css';
import { Button, Card, InputGroup, FormControl }  from 'react-bootstrap'

function App() {
  return (
    <div style={{
      display: "flex", 
      justifyContent: "center", 
      margin: "25px",
      alignItems: "center"}}>
      <Card style={{ width: '100%', height: "100%" }}>
        <Card.Body style=
          {{
            display: "flex", 
            justifyContent: "center", 
            margin: "25px",
            alignItems: "center"
          }}>
          <InputGroup className="mb-3" style={{ width: '50%' }} >
            <FormControl
              placeholder="Search giphy"
              aria-label="Search giphy"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Start</Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    </div>
    
  )
}

export default App;
