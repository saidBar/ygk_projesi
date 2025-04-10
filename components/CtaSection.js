// components/CtaSection.js
export default function CtaSection({ onDownloadClick }) {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to transform your workflow?
              </h2>
              <p className="mt-3 text-lg text-blue-100">
                Start using our product today and see the difference it makes for your business. 
                Sign up now and get access to all features with a 14-day free trial.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <button
                  onClick={onDownloadClick}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                >
                  Download Now
                </button>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-30 hover:bg-opacity-40 shadow-lg transform transition duration-200 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:pl-8">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-medium text-gray-900">Join our newsletter</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Stay updated with the latest features, tips, and special offers.
                </p>
                <form className="mt-4">
                  <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }