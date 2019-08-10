import { combineReducers } from 'redux';

import { reducers as NavigationReducers } from './Navigation';
import { reducers as IntlReducers } from './Intl';

// Functions to catch actions dispatched
export default combineReducers({
	NavigationReducers,
	IntlReducers
});
