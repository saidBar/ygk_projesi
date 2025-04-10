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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }