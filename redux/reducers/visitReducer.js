import {
  UPDATE_PIN,
  UPDATE_VISIT,
  NEW_VISIT,
  UPDATE_MEMBERS,
} from '../actions/actionTypes';

export const visitReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case NEW_VISIT:
      return payload;
    case UPDATE_VISIT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const pinReducer = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_PIN:
      return [
        ...state,
        payload,
      ];
    default:
      return state;
  }
};

const defaultMembers = [
  {
    id: 0,
    name: '',
    teamLead: true,
  }, {
    id: 1,
    name: '',
    teamLead: false,
  },
];

export const teamMemberReducer = (state = defaultMembers, { type, payload }) => {
  switch (type) {
    case UPDATE_MEMBERS:
      return payload;
    default:
      return state;
  }
};
