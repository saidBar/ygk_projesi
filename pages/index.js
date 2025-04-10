import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';
import AboutSection from '../components/AboutSection';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductShowcase from '../components/ProductShowcase';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  const handleDownload = () => {
    if (user) {
      router.push('/download');
    } else {
      router.push('/login?redirect=download');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Your Product Name</title>
        <meta name="description" content="Your product description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <ProductShowcase />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Download Now
            </button>
          </div>
        </div>
        
        <AboutSection id="about" />
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}