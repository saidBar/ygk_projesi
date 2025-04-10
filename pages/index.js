// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProductShowcase from '../components/ProductShowcase';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
//import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Your Product Name | Simplify Your Workflow</title>
        <meta name="description" content="Boost productivity with our revolutionary solution that transforms how you work. Save time and achieve better results with less effort." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Your Product Name | Simplify Your Workflow" />
        <meta property="og:description" content="Boost productivity with our revolutionary solution that transforms how you work." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourproduct.com" />
        <meta property="og:image" content="https://yourproduct.com/og-image.jpg" />
      </Head>

      <Navbar />
      
      <main>
        <ProductShowcase />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50 -z-10"></div>
          <FeaturesSection id="features" />
        </div>
        
        <TestimonialsSection id="testimonials" />
        
        <AboutSection id="about" />
        
        <CtaSection onDownloadClick={handleDownload} />
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p className="mt-2">Follow us on <a href="https://twitter.com/yourcompany" className="text-blue-400 hover:underline">Twitter</a> and <a href="https://linkedin.com/company/yourcompany" className="text-blue-400 hover:underline">LinkedIn</a></p>
        </div>
      </footer>
    </div>
  );
}