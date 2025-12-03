import { useState } from 'react';
import { HomeScreen } from './components/home-screen';
import { RequestCollection } from './components/request-collection';
import { CollectionPoints } from './components/collection-points';
import { ActiveRequests } from './components/active-requests';

export type Screen = 'home' | 'request' | 'points' | 'active-requests';

export interface CollectionRequest {
  id: string;
  address: string;
  plasticType: string;
  quantity: string;
  date: string;
  time: string;
  status: 'pending' | 'accepted' | 'completed';
  collector?: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [requests, setRequests] = useState<CollectionRequest[]>([
    {
      id: '1',
      address: 'Rua das Flores, 123',
      plasticType: 'PET',
      quantity: '5-10kg',
      date: '2025-12-05',
      time: '14:00',
      status: 'accepted',
      collector: 'João Silva'
    }
  ]);

  const addRequest = (request: Omit<CollectionRequest, 'id' | 'status'>) => {
    const newRequest: CollectionRequest = {
      ...request,
      id: Date.now().toString(),
      status: 'pending'
    };
    setRequests([...requests, newRequest]);
    setCurrentScreen('active-requests');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} requestCount={requests.length} />;
      case 'request':
        return <RequestCollection onBack={() => setCurrentScreen('home')} onSubmit={addRequest} />;
      case 'points':
        return <CollectionPoints onBack={() => setCurrentScreen('home')} />;
      case 'active-requests':
        return <ActiveRequests onBack={() => setCurrentScreen('home')} requests={requests} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} requestCount={requests.length} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {renderScreen()}
    </div>
  );
}
