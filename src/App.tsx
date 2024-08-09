import React from 'react';
import { ActivityProvider } from './contexts/ActivityContext';
import Header from './components/Header';
import { ActivityForm } from './components/ActivityForm';
import { CurrentActivity } from './components/CurrentActivity';
import { ActivityList } from './components/ActivityList';
import { ExportData } from './components/ExportData';

const App: React.FC = () => {
  return (
    <ActivityProvider>
      <div className="container mx-auto p-4 max-w-2xl">
        <Header />
        <ActivityForm />
        <CurrentActivity />
        <ActivityList />
        <ExportData />
      </div>
    </ActivityProvider>
  );
};

export default App;