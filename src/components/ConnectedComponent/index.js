import {connect} from 'react-redux';

import mapStateToProps from '../../services/mapStateToProps';
import mapDispatchToProps from '../../services/mapDispatchToProps';

export default InputComponent => {
  // High Order Component
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(InputComponent);
};
