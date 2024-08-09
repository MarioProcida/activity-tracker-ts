import React from 'react';
import { useActivityManager } from '../hooks/useActivityManager';

export const ActivityList: React.FC = () => {
  const { activities } = useActivityManager();

  if (activities.length === 0) {
    return <p>Nessuna attività registrata.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Log Attività</h2>
      {activities.map((act, index) => (
        <div key={index} className="mb-2 p-2 border rounded">
          <p><strong>Cliente:</strong> {act.client}</p>
          <p><strong>Attività:</strong> {act.activity}</p>
          <p><strong>Luogo:</strong> {act.location}</p>
          <p><strong>Durata:</strong> {act.duration}</p>
        </div>
      ))}
    </div>
  );
};