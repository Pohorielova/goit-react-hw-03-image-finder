import React, { Component } from 'react';
import { Box } from './Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    data: [],
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      console.log('change searchQuery');
      fetch(
        `https://pixabay.com/api/?key=31598593-79bd95191575728407a30b47c&q=${this.state.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ data: data.hits });

          console.log(data.hits);
        });
    }
  }
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
    this.setState({ page: 1 });
  };

  render() {
    return (
      <Box as="div" p={0}>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery
          searchQuery={this.state.searchQuery}
          page={this.state.page}
          data={this.state.data}
        ></ImageGallery>
        {this.state.data.length >= 12 && (
          <Button onClick={this.loadMore}></Button>
        )}
      </Box>
    );
  }
}
export default App;
