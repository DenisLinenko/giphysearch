import React, { Component } from 'react'
import styled from 'styled-components'
import giphy from './utils/giphy'
import SearchInput from './components/SearchInput'
import GiphyResults from './components/GiphyResults'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      loading: false,
      noResults: false,
    }
  }

  handleSearch = async (search) => {
    this.setState({ loading: true })

    const { data } = await giphy({
      search,
    })

    this.setState({ results: data, loading: false, noResults: data.length === 0 })
  }

  render() {
    const { results, loading, noResults } = this.state
    return (
      <Container>
        <SearchInput loading={loading} handleSearch={this.handleSearch} />
        <GiphyResults results={results} noResults={noResults} />
      </Container>
    )
  }
}

export default App
