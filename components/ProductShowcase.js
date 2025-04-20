// components/ProductShowcase.js
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';
import Image from 'next/image';

export default function ProductShowcase() {
  const { user } = useAuth();
  const router = useRouter();

  const handleGettingStartedClick = () => {
    if (user) {
      router.push('/download'); // Redirect to download page if logged in
    } else {
      router.push('/login'); // Redirect to login/signup page if not logged in
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Your Amazing</span>
              <span className="block text-blue-600">Product</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-3xl">
              A revolutionary solution that transforms how you work. Our product helps you save time, increase productivity, and achieve better results with less effort.
            </p>

            {/* ✅ Fixed button layout using flex + gap */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGettingStartedClick}
                className="flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow"
              >
                Getting Started
              </button>
              <a
                href="#features"
                className="flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-medium !text-blue-600 bg-white hover:bg-blue-50 border border-blue-600 rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7">
            <div className="w-full h-full overflow-hidden">
              <Image
                src="/images/product-image.jpg"
                alt="Product Image"
                className="w-full h-auto object-cover"
                width={800} // Replace with the actual width of your image
                height={600} // Replace with the actual height of your image
                priority // Optional: Use this for images critical to page load
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
