/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons;

const {
  GooglePlusShareCount,
  LinkedinShareCount
} = ShareCounts;

const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

const SocialMedia = React.createClass({
  render() {
    const shareUrl = 'http://computebox.me';
    const title = 'ComputeBox';

    return (
      <div className="SocialMedia__container">
        <div className="SocialMedia__social-network-platform">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="SocialMedia__social-network-platform__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>

          <div className="SocialMedia__social-network-platform__share-count">
            &nbsp;
          </div>
        </div>

        <div className="SocialMedia__social-network-platform">
          <GooglePlusShareButton
            url={shareUrl}
            className="SocialMedia__social-network-platform__share-button">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>

          <GooglePlusShareCount
            url={shareUrl}
            className="SocialMedia__social-network-platform__share-count">
            {count => count}
          </GooglePlusShareCount>
        </div>

        <div className="SocialMedia__social-network-platform">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className="SocialMedia__social-network-platform__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>

          <LinkedinShareCount
            url={shareUrl}
            className="SocialMedia__social-network-platform__share-count">
            {count => count}
          </LinkedinShareCount>
        </div>
      </div>
    );
  },
});

export default SocialMedia;
