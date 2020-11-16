import axios from 'axios'

  const getAllData = async () => {
    try {
      const returnedData = await axios.all([
        axios.get('http://52.26.193.201:3000/products/10'),
        axios.get('http://52.26.193.201:3000/products/10/styles'),
        axios.get('http://52.26.193.201:3000/reviews/10/meta'),
      ]);

      await setProductInfo(returnedData[0].data);
      await setStyleInfo(returnedData[1].data);
      await setReviewMeta(returnedData[2].data);
    } catch (err) {
      console.error('Error at get all product data', err.message);
    }
  };


  export {getAllData}