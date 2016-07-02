import React from 'react';
import SocialMedia from './SocialMedia.jsx';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HeaderComponent__container">
        <SocialMedia />
      </div>
    );
  }

}

export default HeaderComponent;
