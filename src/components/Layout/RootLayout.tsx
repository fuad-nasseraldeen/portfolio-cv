import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer.tsx';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Fuad Nasser-Aldeen',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <>
        <link
          rel="icon"
          href="/assests/home/homeImage.png"
          type="image/png"
          sizes="any"
        />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "19px",
              padding: "9px",
            },
          }}
        />
        {children}
        <Sidebar />
        <Footer />
     
    </>
  );
}
