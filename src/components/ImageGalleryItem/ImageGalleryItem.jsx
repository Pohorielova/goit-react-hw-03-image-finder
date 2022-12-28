import React, { Component } from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
class ImageGalleryItem extends Component {
  render() {
    return (
      <GalleryItem key={this.props.id}>
        <GalleryItemImg src={this.props.webformatURL} alt={this.props.tags} />
      </GalleryItem>
    );
  }
}
export default ImageGalleryItem;
