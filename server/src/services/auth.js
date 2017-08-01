import jwt from 'jsonwebtoken';

import constants from '../config/constants';
import User from '../models/User';

/**
 * Checks if the user is authenticated.
 * @param {Object} user the user from the context.
 */
export async function requireAuth(user) {
  // Check if we got data the right data in the header.
  if (!user || !user._id) {
    throw new Error('Unauthorized');
  }

  // Check if the user actually exists.
  const me = await User.findById(user._id);
  if (!me) {
    throw new Error('Unauthorized');
  }

  return me;
}

export function decodeToken(token) {
  const arr = token.split(' ');

  if (arr[0] === 'Bearer') {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error('Token not valid!');
}
