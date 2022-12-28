import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
class ImageGallery extends Component {
  state = {
    hits: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('change searchQuery');
      fetch(
        `https://pixabay.com/api/?key=31598593-79bd95191575728407a30b47c&q=${this.props.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`
      )
        .then(res => res.json())
        .then(hits => {
          this.setState({ hits });
          console.log(hits);
        });
    }
  }
  render() {
    return (
      <Gallery>
        {/* {this.state.hits && */}
        {this.state.hits.map(({ webformatURL, id }) => (
          <ImageGalleryItem
            searchQuery={this.props.searchQuery}
            webformatURL={this.state.hits.webformatURL}
            id={this.state.hits.id}
          ></ImageGalleryItem>
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
