import React, { Component } from 'react';
import './App.css';
import { Button, Card, InputGroup, FormControl }  from 'react-bootstrap'
import styled from 'styled-components'


const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
  align-items: center;
`
const StyledCard = styled('Card')`
  width: 100%; 
  height: 100%; 
  display: flex;
  flex-direction: column; 
`
const Grid = styled.div`
  display: flex; 
  justify-content: center; 
  margin: 25px;
  align-items: center;
`
const Body = styled.div`
  display: flex;
  justify-content: center; 
  margin: 25px;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      results: [],
    }
  }
  myChangeHandler = (event) => {
    this.setState({search: event.target.value});
  }

  handleClick = () => {
    console.log("------handleClick-----", this.state.search)
    let data = [1, 2, 3]
    this.setState({results: data})
  }

  render() {
    const { search, results } = this.state
    console.log("-----search---->", search)
    return (
      <Main>
        <StyledCard>
          <Body>
            <InputGroup onChange={this.myChangeHandler} className="mb-3" style={{ width: '50%' }} >
              <FormControl
                placeholder="Search giphy"
                aria-label="Search giphy"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button onClick={this.handleClick} variant="outline-secondary">Start</Button>
              </InputGroup.Append>
            </InputGroup>
          </Body>
          {results && results.length > 0 && <Grid>giphyList...</Grid>}
        </StyledCard>
      </Main>
    )
  }
}

export default App;
