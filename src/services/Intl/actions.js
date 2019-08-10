import * as configs from '../../configs';

const updateLanguage = language => {
  return dispatch => {
    dispatch({
      type: configs.actions.name.intl.UPDATE_LANGUAGE,
      language,
    });
  };
};

export default {
  updateLanguage,
};
