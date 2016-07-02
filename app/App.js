import React from 'react';
import styles from './App.css';
import HeaderComponent from './header.jsx';
import Button from 'react-bootstrap/lib/Button';

export default class App extends React.Component {
  render () {
    return (
      <div className="">
        <HeaderComponent />
      </div>
    );
  }
}
