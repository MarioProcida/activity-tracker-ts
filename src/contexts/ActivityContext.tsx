import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ActivityState, ActivityAction, Activity } from '../types/activity';

const ActivityContext = createContext<{
  state: ActivityState;
  dispatch: React.Dispatch<ActivityAction>;
} | undefined>(undefined);

const initialState: ActivityState = {
  activities: [],
  currentActivity: null,
};

function activityReducer(state: ActivityState, action: ActivityAction): ActivityState {
  switch (action.type) {
    case 'START_ACTIVITY':
      return { ...state, currentActivity: action.payload };
    case 'STOP_ACTIVITY':
      return {
        ...state,
        activities: [...state.activities, action.payload],
        currentActivity: null,
      };
    case 'DELETE_ALL':
      return { ...state, activities: [] };
    default:
      return state;
  }
}

export function ActivityProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivity() {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
}