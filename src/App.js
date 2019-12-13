import React, { Component } from 'react';
import './App.css';
import { Button, InputGroup, Card, FormControl }  from 'react-bootstrap'
import styled from 'styled-components'
import giphy from '/Users/denis/Documents/projects/giphysearch/src/Giphy.js'


const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
  align-items: center;
`
const StyledCard = styled(Card)`
  width: 100%;
  heigth: 100%; 
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

  handleClick = async() => {
    const { data } = await giphy({
      search: this.state.search,
    })
    this.setState({results: data})
  }

  render() {
    const { results } = this.state
    console.log("-----results in render---->", results)
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
