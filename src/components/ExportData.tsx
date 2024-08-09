import React, { useState, useEffect } from 'react';
import { useActivityManager } from '../hooks/useActivityManager';
import { formatDate } from '../utils/dateFormatter';

export const ExportData: React.FC = () => {
  const { activities, deleteAll } = useActivityManager();
  const [exportedData, setExportedData] = useState<string>('');

  useEffect(() => {
    const handleActivitiesDeleted = () => setExportedData('');
    window.addEventListener('activitiesDeleted', handleActivitiesDeleted);
    return () => {
      window.removeEventListener('activitiesDeleted', handleActivitiesDeleted);
    };
  }, []);

  const exportActivities = () => {
    const header = "Data,Cliente,Attività,Luogo,Tempo impiegato\n";
    const csvContent = activities.map(act => 
      `${formatDate(act.startTime).split(',')[0]},${act.client},${act.activity},${act.location},${act.duration}`
    ).join("\n");

    setExportedData(header + csvContent);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between mb-4">
        <button
          onClick={exportActivities}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={activities.length === 0}
        >
          Esporta Attività
        </button>
        <button
          onClick={deleteAll}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          disabled={activities.length === 0}
        >
          Elimina tutto
        </button>
      </div>
      {exportedData && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Dati Esportati</h3>
          <textarea
            readOnly
            value={exportedData}
            className="w-full h-40 p-2 border rounded"
          />
          <p className="mt-2 text-sm text-gray-600">
            Copia questi dati e incollali in un file di testo con estensione .csv per utilizzarli in un foglio di calcolo.
          </p>
        </div>
      )}
    </div>
  );
};