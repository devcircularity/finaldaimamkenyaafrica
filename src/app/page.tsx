import { GlobalStateProvider } from '../contexts/GlobalStateContext';
import './globals.css';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('./client'), { ssr: false }); // Correct setup for dynamic imports

export default function Page() {
  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  );
}
