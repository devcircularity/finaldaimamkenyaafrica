import './globals.css';
import { Metadata } from 'next';
import TopBar from '../components/TopBar/TopBar'; // Adjust the path as necessary
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Daima Mkenya - Kenyan Identity Through Fabric',
  description: 'Celebrating Kenya through sustainable and inspiring fabrics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="root">
          <TopBar />
          {/* Add margin-top to offset the fixed TopBar */}
          <div style={{ marginTop: '40px' }}>
            {children}
          </div>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
