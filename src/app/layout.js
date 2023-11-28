import { Roboto } from 'next/font/google';
import './globals.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/footer/Footer';

const roboto = Roboto({ subsets: ['latin'], weight:['400','500','700'] })

export const metadata = {
  title: 'Food Delivery app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ToastContainer 
          position='bottom-left'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
        <main className='max-w-4xl mx-auto p-4 m-4'>
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
