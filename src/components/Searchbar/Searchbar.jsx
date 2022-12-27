// import { Box } from 'components/Box';
import React from 'react';
// import PropTypes from 'prop-types';
import {
  HeaderSearch,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormBtnLabel,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => (
  <HeaderSearch>
    <SearchForm>
      <SearchFormBtn type="submit">
        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
      </SearchFormBtn>

      <SearchFormInput
        type="text"
        autocomplete="off"
        placeholder="Search images and photos"
      />
    </SearchForm>
  </HeaderSearch>
);
export default Searchbar;
// Searchbar.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
