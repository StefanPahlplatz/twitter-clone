import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

/**
 * Wrapper around date-fns's distance_in_words_to_now.
 * Check the documentation here: https://date-fns.org/v1.28.5/docs/distanceInWordsToNow
 * @param {*} date to convert into a slug like '1h'
 */
const timeElapsed = date => {
  // Get the distance in words with date-fns
  const distance = distanceInWordsToNow(date, { includeSeconds: true }).replace(
    / /g,
    ''
  );
  // Special cases
  if (distance === 'halfaminute' || distance === 'lessthanaminute') {
    return '1m';
  }

  // Expression to match digits and the first letter
  const regex = /\d+\w/g;

  try {
    // Extract the time.
    const result = regex.exec(distance);
    return result[0];
  } catch (error) {
    return distance;
  }
};

export default timeElapsed;
