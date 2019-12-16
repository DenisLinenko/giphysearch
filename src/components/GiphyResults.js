import React from 'react'
import { CardColumns } from 'react-bootstrap'
import PropTypes from 'prop-types'
import GiphyItem from './GiphyItem'
import NoResults from './NoResults'

const GiphyResults = ({ results, noResults }) => {
  return noResults ? (
    <NoResults />
  ) : (
    <CardColumns>
      {results.map((item) => (
        <GiphyItem key={item.id} data={item} />
      ))}
    </CardColumns>
  )
}

GiphyResults.defaultProps = {
  results: [],
}

GiphyResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  noResults: PropTypes.bool.isRequired,
}
export default GiphyResults
