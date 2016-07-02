import React from 'react';
import styles from './App.css';
import HeaderComponent from './header.jsx';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <HeaderComponent />
      </div>
    );
  }
}
