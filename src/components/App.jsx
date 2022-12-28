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
    showModal: false,
    modalImage: '',
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
          // this.setState({ data: data.hits });

          const newData = data.hits;
          let newArray = [];
          newArray = [...this.state.data, ...newData];

          this.setState(({ data }) => ({ data: newArray }));

          console.log(data.hits);
        });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
    this.setState({ page: 1, data: [] });
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
          <Box as="div" display="flex" justifyContent="center" pt={20} pb={20}>
            <Button onClick={this.loadMore}></Button>
          </Box>
        )}
      </Box>
    );
  }
}
export default App;
