// import { Box } from 'components/Box';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  HeaderSearch,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormBtnLabel,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      alert('atatata');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <HeaderSearch>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </HeaderSearch>
    );
  }
}

export default Searchbar;
// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
