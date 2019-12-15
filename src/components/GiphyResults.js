import React from 'react';
import { CardColumns } from 'react-bootstrap';
import PropTypes from 'prop-types';
import GiphyItem from './GiphyItem';


const GiphyResults = ({ results = [] }) => (
  <CardColumns>
    {results.map((item) => <GiphyItem key={item.id} data={item} />)}
  </CardColumns>
);


GiphyResults.propTypes = {
  results: PropTypes.arrayOf.isRequired,
};
export default GiphyResults;
