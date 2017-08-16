import { router } from '../navigation/AppNavigator';

export default (state, action) => {
  const newState = router.getStateForAction(action, state);
  return newState || state;
};
