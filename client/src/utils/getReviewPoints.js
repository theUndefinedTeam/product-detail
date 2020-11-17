//This function is used to create fill percentage for review stars based on the ratings received by users of the product

//Receives an object containing number of reviews and what rating they received on a scale of 1-5

//Returns an array of 5 integers that will represent the fill percentage of each star that will be created from it.

const getReviewPoints = (ratings) => {
  const totalPossibleStars =
    Object.values(ratings).reduce((acc, num) => (acc += num)) * 5;

  const totalStarsReceived = Object.entries(ratings).reduce((acc, entry) => {
    acc += Number(entry[0]) * Number(entry[1]);
    return acc;
  }, 0);

  const multiplier = 500 / totalPossibleStars;
  let adjustedStars = Math.floor(multiplier * totalStarsReceived);

  return [...Array(5)].map((item) => {
    if (adjustedStars >= 100) {
      adjustedStars -= 100;
      return 100;
    } else if (adjustedStars > 0) {
      const remainingStars = adjustedStars;
      adjustedStars -= adjustedStars;
      return remainingStars;
    } else return 0;
  });
};

export default getReviewPoints;
