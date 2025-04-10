// components/FeaturesSection.js
export default function FeaturesSection({ id }) {
    return (
      <div id={id} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover what makes our product stand out from the competition.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 pt-2">Lightning Fast</h3>
                <p className="mt-3 text-base text-gray-500">
                  Our software is optimized for speed and performance, ensuring a smooth experience even with large datasets.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 pt-2">Highly Secure</h3>
                <p className="mt-3 text-base text-gray-500">
                  Security is our top priority. All your data is encrypted and protected with the latest security protocols.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 pt-2">Intuitive Interface</h3>
                <p className="mt-3 text-base text-gray-500">
                  Our user-friendly interface makes complex tasks simple. No steep learning curve - just get started and be productive.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 pt-2">Cloud Sync</h3>
                <p className="mt-3 text-base text-gray-500">
                  Access your data from anywhere with our cloud synchronization. Your work is always available on all your devices.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 pt-2">Advanced Analytics</h3>
                <p className="mt-3 text-base text-gray-500">
                  Gain valuable insights with our powerful analytics tools. Track performance and make data-driven decisions.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900 pt-2">24/7 Support</h3>
                <p className="mt-3 text-base text-gray-500">
                  Our dedicated support team is available around the clock to help you with any issues or questions you may have.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200 shadow-md">
              Download Now
            </button>
          </div>
        </div>
      </div>
    );
  }