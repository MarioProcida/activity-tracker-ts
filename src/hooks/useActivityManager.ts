import { useActivity } from '../contexts/ActivityContext';
import { formatDate, formatDuration } from '../utils/dateFormatter';
import { Activity } from '../types/activity';

export function useActivityManager() {
  const { state, dispatch } = useActivity();

  const startActivity = (activityData: Omit<Activity, 'startTime'>) => {
    dispatch({
      type: 'START_ACTIVITY',
      payload: { ...activityData, startTime: new Date() },
    });
  };

  const stopActivity = () => {
    if (state.currentActivity) {
      const endTime = new Date();
      const duration = endTime.getTime() - state.currentActivity.startTime.getTime();
      dispatch({
        type: 'STOP_ACTIVITY',
        payload: {
          ...state.currentActivity,
          endTime,
          duration: formatDuration(duration),
        },
      });
    }
  };

  const deleteAll = () => {
    dispatch({ type: 'DELETE_ALL' });
    // Emetti un evento custom che può essere ascoltato da altri componenti
    window.dispatchEvent(new CustomEvent('activitiesDeleted'));
  };

  return {
    activities: state.activities,
    currentActivity: state.currentActivity,
    startActivity,
    stopActivity,
    deleteAll,
  };
}