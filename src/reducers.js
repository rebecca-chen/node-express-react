import issueList from './constant';
import * as types from './actionTypes';

const initialState = { issues: issueList };

const operation = (state = initialState, action) => {
  switch (action.type) {
    case types.DeleteRow:
      return { ...state,
        issues: state.issues.filter(issue => issue.seq !== action.seq)
      };
    case types.AddRow:
      return { ...state,
        issues: [...state.issues,
          { ...action.issue, seq: Object.keys(state.issues).length + 1 }
        ]
      };
    case types.UpdateRow:
      return { ...state,
        issues: state.issues.map(issue =>
          issue.seq === action.issue.seq ?
            action.issue : issue) };
    default:
      return state;
  }
};

export default operation;
