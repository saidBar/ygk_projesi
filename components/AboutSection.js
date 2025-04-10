// components/AboutSection.js
export default function AboutSection({ id }) {
  return (
    <div id={id} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            {/* REPLACE: Your company description */}
            Learn more about our company and our mission to provide the best solutions.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">Our Mission</h3>
              <p className="mt-4 text-base text-gray-500 text-center">
                {/* REPLACE: Your mission statement */}
                We&apos;re on a mission to simplify complex processes and make advanced technology accessible to everyone.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">Our Team</h3>
              <p className="mt-4 text-base text-gray-500 text-center">
                {/* REPLACE: Your team description */}
                Our diverse team of experts is dedicated to creating innovative solutions that make a difference in people&apos;s lives.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center">Our Values</h3>
              <p className="mt-4 text-base text-gray-500 text-center">
                {/* REPLACE: Your values */}
                We believe in innovation, quality, and customer satisfaction. These core values guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}