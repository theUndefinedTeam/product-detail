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
    <Col className='w-100 mb-4'>
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
                  style={{ width: '20%' }}
                  onClick={(e) => handleStyleSelect(e)}
                  alt='product style'
                />
                {currentStyleIdx === styleCounter && (
                  <span>
                    <i
                      className='fas fa-check-circle'
                      styles={{ fontSize: '2rem' }}></i>
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
};

export default StyleSelector;
