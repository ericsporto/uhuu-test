import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../styles/globals.css';
import ReactQueryWrapper from './ReactQueryWrapper';

export const metadata: Metadata = {
  title: 'Uhuu Test',
  description: 'Technical Test',
};

const roboto = Roboto({
  weight: ["700", "500", "400", "300"],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning={true}>
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
}
