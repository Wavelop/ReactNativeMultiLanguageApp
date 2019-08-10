/* eslint-disable global-require */
import * as configs from '../../configs';

const setLanguage = (language) => {
	let messages = {};
	switch (language) {
		case 'it':
			messages = Object.assign(messages, require(`../../i18n/it.json`));
			break;
		default:
		case 'en':
			messages = Object.assign(messages, require(`../../i18n/en.json`));
			break;
	}
	return messages;
};

const initialState = {
	locale: 'en',
	messages: setLanguage('en')
};

const intlData = (state = initialState, action) => {
	if (action === undefined) return state;
	switch (action.type) {
		case configs.actions.name.intl.UPDATE_LANGUAGE:
			return {
				locale: action.language,
				messages: setLanguage(action.language)
			};
		default:
			return state;
	}
};
export default intlData;
