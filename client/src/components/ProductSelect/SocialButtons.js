/* eslint-disable jsx-quotes */
/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/product/productContext';
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

const SocialButtons = () => {
  const productContext = useContext(ProductContext);
  const { images, currentStyleIdx, currentImage } = productContext;

  return (
    <div className='d-flex mr-4 pull-right'>
      <FacebookShareButton className='mr-1'>
        <FacebookIcon size={22} />
      </FacebookShareButton>
      <PinterestShareButton
        media={images[currentStyleIdx][currentImage].url}
        description='This is a super cool product'
        className='mr-1'>
        <PinterestIcon size={22} />
      </PinterestShareButton>
      <TumblrShareButton className='mr-1'>
        <TumblrIcon size={22} />
      </TumblrShareButton>
      <EmailShareButton className='mr-1'>
        <EmailIcon size={22} />
      </EmailShareButton>
    </div>
  );
};

SocialButtons.propTypes = {};

export default SocialButtons;
