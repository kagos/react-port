import React from 'react';
import NavBarComponent from './NavBar.jsx';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HeaderComponent__container">
        <NavBarComponent />
      </div>
    );
  }

}

export default HeaderComponent;
