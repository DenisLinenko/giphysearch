import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';


const Body = styled.div`
  display: flex;
  justify-content: center; 
  margin: 25px;
  width: 50%;
  align-items: center;
`;

const SearchInput = ({ handleSearch }) => {
  const [search, setSearch] = useState('');
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onClick = () => {
    handleSearch(search);
  };

  return (
    <Body>
      <InputGroup>
        <FormControl placeholder="Search..." onChange={onChange} />
        <InputGroup.Append>
          <Button onClick={onClick} disabled={search === ''} variant="primary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Body>
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default SearchInput;
