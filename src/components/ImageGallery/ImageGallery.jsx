import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
class ImageGallery extends Component {
  render() {
    return (
      <Gallery>
        {this.props.data.map(({ webformatURL, id, tags }, index) => (
          <ImageGalleryItem
            webformatURL={webformatURL}
            key={id}
            index={index}
            tags={tags}
          ></ImageGalleryItem>
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
