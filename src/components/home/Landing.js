//import React, { Component } from 'react';

//import { connect } from 'react-redux';

import SearchForm from './SearchForm';
//import MoviesContainer from './MoviesContainer';
//import Spinner from '../layout/Spinner';

import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
      </div>
    )
  }
}

