
import { Metadata } from 'next';
import TopBar from '../components/TopBar/TopBar';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap first
import 'boundless-commerce-components/dist/styles.css'; // Import Boundless styles
import WrapperForCartContext from '@/components/wrapperForCartContext';
import CategoriesMenuWrapper from '@/components/CategoriesMenuWrapper';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daima Mkenya - Kenyan Identity Through Fabric',
  description: 'Celebrating Kenya through sustainable and inspiring fabrics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <WrapperForCartContext>
          <div id="root">
            <TopBar />
            <CategoriesMenuWrapper />
            <div style={{ marginTop: '40px' }}>
              {children}
            </div>
            <WhatsAppButton />
          </div>
        </WrapperForCartContext>
      </body>
    </html>
  );
}
