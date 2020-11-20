import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Image } from 'react-bootstrap';
import ProductContext from '../../context/product/productContext';

const StyleSelector = ({ setCurrentStyleIdx, currentStyleIdx, styles }) => {
  const productContext = useContext(ProductContext);
  const { setCurrentImage, images } = productContext;
  //makes arrays of a length of 4 for creating maximum length
  const makeStylesArrays = (styleArr) => {
    let arr = [...styleArr];
    const slices = Math.ceil(styleArr.length / 4);
    return [...new Array(slices)].map((item) => {
      return arr.splice(0, 4).map((arr) => arr[0].thumbnail_url);
    });
  };

  const handleStyleSelect = (e) => {
    const styleId = Number(e.target.id);
    setCurrentStyleIdx(styleId);
    setCurrentImage(0);
  };

  let styleCounter = -1;
  const thumbnailArrays = makeStylesArrays(images);
  return (
    <Col className='w-100'>
      <h6>
        Style {'>'} {styles.results[currentStyleIdx].name}
      </h6>
      {thumbnailArrays.map((row, i) => (
        <Row key={i}>
          {row.map((imageUrl) => {
            styleCounter++;
            return (
              <Fragment key={styleCounter}>
                <Image
                  data-testid='style-select-image'
                  id={styleCounter}
                  src={imageUrl}
                  roundedCircle
                  className='p3 ml-2 mb-2'
                  style={{ width: '20%', border: '2px solid white' }}
                  onClick={(e) => handleStyleSelect(e)}
                  alt='product style'
                />
                {currentStyleIdx === styleCounter && (
                  <span>
                    <i className='fas fa-check-circle' styles={checkStyles}></i>
                  </span>
                )}
              </Fragment>
            );
          })}
        </Row>
      ))}
    </Col>
  );
};

const checkStyles = {
  position: 'fixed',
  left: '20px',
};
StyleSelector.propTypes = {
  styles: PropTypes.object.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
  setCurrentStyleIdx: PropTypes.func.isRequired,
};

export default StyleSelector;

//pass in "results", currentStyleIdx
//map over results and place in thumbnails- each picture will link to a different style
//on click of a thumbnail, change currentStyleIdx

/*
Below the product information, the user should be presented all the styles of the product and have the ability to toggle between them.  Each style should be displayed as a thumbnail.  

All styles should display for the current product at all times.  There is no limit to the number of styles a product can have.  The thumbnails should appear in rows of 4.  

The current selection should be indicated within the list by the overlay of a checkmark on top of the thumbnail for that style.   Additionally, the title for that style should appear typed out in full above the thumbnail list.

A user will be able to change the selected style by clicking on the thumbnail displaying that style.   Clicking on the thumbnail for the currently selected style will have no impact.

By default, the style selected will be the first in the list.  
A product will always have at least one style. 
Only one style can be selected at a time.  A style must be selected at all times.

*/
