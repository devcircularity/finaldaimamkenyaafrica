import { Metadata } from 'next';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'; // Ensure the correct path

export const metadata: Metadata = {
  title: 'Daima Mkenya - Kenyan Identity Through Fabric',
  description: 'Celebrating Kenya through sustainable and inspiring fabrics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          {children}
          <WhatsAppButton /> {/* Add the WhatsApp button here */}
        </div>
      </body>
    </html>
  );
}
