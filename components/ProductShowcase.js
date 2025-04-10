// components/ProductShowcase.js
export default function ProductShowcase() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Your Amazing</span>
              <span className="block text-blue-600">Product</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-3xl">
              {/* REPLACE: Your product description */}
              A revolutionary solution that transforms how you work. Our product helps you save time, increase productivity, and achieve better results with less effort.
            </p>
            
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#download"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#features"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7">
            <div className="rounded-lg shadow-xl overflow-hidden">
              {/* REPLACE: Add your product image here */}
              <div className="h-96 flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-medium text-xl">
                Product Image Placeholder
                {/* Replace with: <img src="/images/product-image.jpg" alt="Product Image" className="w-full h-auto" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}