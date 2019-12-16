import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

const GiphyItem = ({
  data: {
    title,
    url,
    images: {
      downsized: { url: urlGif },
    },
  },
} = {}) => (
  <Card>
    <Card.Img variant="top" src={urlGif} />
    <Card.Body>
      <Card.Title>
        <a href={url}>{title}</a>
      </Card.Title>
    </Card.Body>
  </Card>
)

GiphyItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.shape({
      downsized: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}
export default GiphyItem
