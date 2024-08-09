export interface Activity {
  client: string;
  activity: string;
  location: 'in loco' | 'remoto';
  startTime: Date;
  endTime?: Date;
  duration?: string;
}

export interface ActivityState {
  activities: Activity[];
  currentActivity: Activity | null;
}

export type ActivityAction =
  | { type: 'START_ACTIVITY'; payload: Activity }
  | { type: 'STOP_ACTIVITY'; payload: Activity }
  | { type: 'DELETE_ALL' };