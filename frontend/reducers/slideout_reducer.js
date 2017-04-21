import { CHANGE_SLIDEOUT, REMOVE_SLIDEOUT } from '../actions/slideout_actions';

const _nullSlideout = {};

const SlideoutReducer = (oldState=_nullSlideout, action) => {
  switch(action.type) {
    case CHANGE_SLIDEOUT:
      return action.slideout;
    case REMOVE_SLIDEOUT:
      return _nullSlideout;
    default:
      return oldState;
  }
};

export default SlideoutReducer;
