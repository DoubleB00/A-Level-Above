import { Home, Hammer, Wrench, PaintBucket, Building2, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Improvements',
    description: 'Enhance your home with quality upgrades and improvements'
  },
  {
    icon: Hammer,
    title: 'General Contracting',
    description: 'Full-service contracting for projects of any size'
  },
  {
    icon: PaintBucket,
    title: 'Renovations',
    description: 'Transform your space with complete renovations'
  },
  {
    icon: Wrench,
    title: 'Repairs',
    description: 'Expert repairs to keep your property in top condition'
  },
  {
    icon: Building2,
    title: 'Remodeling',
    description: 'Reimagine your space with professional remodeling'
  },
  {
    icon: Briefcase,
    title: 'Residential & Commercial',
    description: 'Serving both homeowners and business clients'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Professional construction and home improvement services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOrange = index % 2 === 0;
            return (
              <div
                key={index}
                className={`bg-slate-50 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-slate-100 ${isOrange ? 'hover:border-orange-500' : 'hover:border-blue-500'} group`}
              >
                <div className={`${isOrange ? 'bg-gradient-to-br from-orange-600 to-orange-500' : 'bg-gradient-to-br from-blue-600 to-blue-500'} w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
