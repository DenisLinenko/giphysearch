import React, { Component } from 'react';
import './App.css';
import { Button, InputGroup, Card, FormControl, CardColumns }  from 'react-bootstrap'
import styled from 'styled-components'
import giphy from '/Users/denis/Documents/projects/giphysearch/src/Giphy.js'


const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;
  align-items: center;
`
const Block = styled(Card)`
  display: flex;
  width: 100%; 
  padding: 25px;
  flex-direction: column; 
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
    const { results = [] } = this.state
    return (
      <Container>
        <Block>
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
          {results.length > 0 && 
            <CardColumns>
              {results.map(({ id, title, url, images: {downsized: {url: urlGif}} }) => 
                <Card key={id}>
                  <Card.Img variant="top" src={urlGif}/>
                  <Card.Body>
                    <Card.Title><a href={url}>{title}</a></Card.Title>
                  </Card.Body>
                </Card>
              )}
            </CardColumns>
          }
        </Block>
      </Container>
    )
  }
}

export default App;
