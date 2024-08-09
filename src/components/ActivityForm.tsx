import React, { useState } from 'react';
import { useActivityManager } from '../hooks/useActivityManager';

export const ActivityForm: React.FC = () => {
  const [client, setClient] = useState('');
  const [activity, setActivity] = useState('');
  const [location, setLocation] = useState<'in loco' | 'remoto'>('in loco');
  const { startActivity, currentActivity } = useActivityManager();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!client || !activity) {
      alert('Compila tutti i campi prima di iniziare l\'attività');
      return;
    }
    startActivity({ client, activity, location });
    setClient('');
    setActivity('');
    setLocation('in loco');
  };

  const isActivityInProgress = !!currentActivity;

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow">
      <input
        type="text"
        placeholder="Cliente"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        disabled={isActivityInProgress}
      />
      <input
        type="text"
        placeholder="Attività"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        disabled={isActivityInProgress}
      />
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value as 'in loco' | 'remoto')}
        className="w-full p-2 mb-2 border rounded"
        disabled={isActivityInProgress}
      >
        <option value="in loco">In loco</option>
        <option value="remoto">Remoto</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
        disabled={isActivityInProgress}
      >
        Inizio Attività
      </button>
    </form>
  );
};