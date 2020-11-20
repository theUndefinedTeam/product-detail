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

const SocialButtons = (props) => {
  const productContext = useContext(ProductContext);
  const { images, currentStyleIdx, currentImage } = productContext;
  console.log(images[currentStyleIdx][currentImage].url);

  return (
    <div className='d-flex mr-2 pull-right'>
      <FacebookShareButton className='mr-1'>
        <FacebookIcon size={18} />
      </FacebookShareButton>
      <PinterestShareButton
        media={images[currentStyleIdx][currentImage].url}
        description='This is a super cool product'
        className='mr-1'>
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
