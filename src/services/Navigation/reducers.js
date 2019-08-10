import ApplicationNavigator from '../../navigators';
import * as configs from '../../configs';
import actions from './actions';

let nextState = null;
const initialState = {
  index: 0,
  routes: [
    {
      key: 'main',
      routeName: configs.navigators.name.MAIN_NAV,
    },
  ],
};

const navigationData = (state = initialState, action) => {
  if (action === undefined) return state;
  console.log('-------------------', actions.navigate);
  switch (action.type) {
    case configs.navigators.name.REDUX_INIT:
      nextState = ApplicationNavigator.router.getStateForAction(action, state);
      return nextState || state;
    case configs.actions.name.navigation.REDIRECT:
      actions.navigate(action.redirectTo);
      console.log('-------------------', actions);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default navigationData;
