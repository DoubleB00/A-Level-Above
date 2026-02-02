import { MapPin } from 'lucide-react';

const counties = [
  'Middlesex County',
  'Monmouth County',
  'Somerset County',
  'Mercer County'
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Proudly serving communities throughout New Jersey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {counties.map((county, index) => {
                const isOrange = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-slate-50 ${isOrange ? 'hover:bg-orange-50' : 'hover:bg-blue-50'} transition-colors duration-200 border-2 border-transparent ${isOrange ? 'hover:border-orange-500' : 'hover:border-blue-500'}`}
                  >
                    <div className={`${isOrange ? 'bg-gradient-to-br from-orange-600 to-orange-500' : 'bg-gradient-to-br from-blue-600 to-blue-500'} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg sm:text-xl font-semibold text-slate-900">
                      {county}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 text-base sm:text-lg">
                Not sure if we serve your area?{' '}
                <a
                  href="tel:732-867-4805"
                  className="text-orange-600 font-semibold hover:text-orange-700 underline"
                >
                  Give us a call
                </a>{' '}
                and we'll be happy to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
