import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  PinterestShareButton,
  PinterestIcon,
  TumblrShareButton,
  TumblrIcon,
} from 'react-share';

const SocialButtons = (props) => {
  return (
    <div className='d-flex mr-2'>
      <FacebookShareButton className='mr-1'>
        <FacebookIcon size={18} />
      </FacebookShareButton>
      <PinterestShareButton className='mr-1'>
        <PinterestIcon size={18} />
      </PinterestShareButton>
      <TumblrShareButton className='mr-1'>
        <TumblrIcon size={18} />
      </TumblrShareButton>
      <EmailShareButton className='mr-1'>
        <EmailIcon size={18} />
      </EmailShareButton>
    </div>
  );
};

SocialButtons.propTypes = {};

export default SocialButtons;
