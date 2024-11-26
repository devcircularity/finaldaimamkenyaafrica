import { GlobalStateProvider } from '../contexts/GlobalStateContext';
import './globals.css';
import App from './client'; // Direct import

export default function Page() {
  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  );
}
