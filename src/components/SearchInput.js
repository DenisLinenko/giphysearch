import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, InputGroup, FormControl, Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`

const SearchInput = ({ handleSearch, loading }) => {
  const [search, setSearch] = useState('')

  const onChange = (event) => {
    setSearch(event.target.value)
  }

  const onClick = () => {
    handleSearch(search)
  }

  return (
    <Container>
      <InputGroup>
        <FormControl placeholder="Search..." onChange={onChange} />
        <InputGroup.Append>
          <Button onClick={onClick} disabled={search === ''} variant="primary">
            {loading && <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />}
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  )
}

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}
export default SearchInput
