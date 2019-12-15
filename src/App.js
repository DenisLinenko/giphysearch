import React, { Component } from 'react';
import styled from 'styled-components';
import giphy from './utils/giphy';
import SearchInput from './components/SearchInput';
import GiphyResults from './components/GiphyResults';


const Container = styled.div`
  display: flex;
  width: 100%; 
  padding: 25px;
  flex-direction: column; 
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleSearch = async (search) => {
    const { data } = await giphy({
      search,
    });
    this.setState({ results: data });
  }

  render() {
    const { results } = this.state;
    return (
      <Container>
        <SearchInput handleSearch={this.handleSearch} />
        <GiphyResults results={results} />
      </Container>
    );
  }
}

export default App;
