import React, { Component } from 'react';
import { Box } from './Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';

class App extends Component {
  state = {
    searchQuery: '',
  };
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?key=31598593-79bd95191575728407a30b47c&q=garden&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(console.log);
  // }
  render() {
    return (
      <Box as="div" p={0}>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
        {/* <Button></Button> */}
      </Box>
    );
  }
}
export default App;
