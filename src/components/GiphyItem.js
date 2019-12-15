import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';


const GiphyItem = ({ data: { title, url, images: { downsized: { url: urlGif } } } } = {}) => (
  <Card>
    <Card.Img variant="top" src={urlGif} />
    <Card.Body>
      <Card.Title><a href={url}>{title}</a></Card.Title>
    </Card.Body>
  </Card>
);

GiphyItem.defaultProps = {
  title: 'No title',
  url: '',
};

GiphyItem.propTypes = {
  data: PropTypes.objectOf.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
};
export default GiphyItem;
