import React from 'react';
import { useActivityManager } from '../hooks/useActivityManager';
import { formatDate } from '../utils/dateFormatter';

export const CurrentActivity: React.FC = () => {
  const { currentActivity, stopActivity } = useActivityManager();

  if (!currentActivity) {
    return null;
  }

  return (
    <div className="mb-4 p-4 border rounded shadow bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Attività in corso</h2>
      <p><strong>Cliente:</strong> {currentActivity.client}</p>
      <p><strong>Attività:</strong> {currentActivity.activity}</p>
      <p><strong>Luogo:</strong> {currentActivity.location}</p>
      <p><strong>Inizio:</strong> {formatDate(currentActivity.startTime)}</p>
      <button
        onClick={stopActivity}
        className="w-full p-2 mt-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Stop Attività
      </button>
    </div>
  );
};