import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    text: 'Quality Workmanship'
  },
  {
    icon: Users,
    text: 'Customer Satisfaction'
  },
  {
    icon: Clock,
    text: 'Reliable & On Time'
  },
  {
    icon: CheckCircle2,
    text: 'Licensed & Insured'
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About Us
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
              At A Level Above Construction LLC, we take pride in delivering exceptional home improvement and construction services to homeowners and businesses throughout New Jersey. Our commitment to quality work, reliability, and customer satisfaction sets us apart from the competition.
            </p>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Whether you need a small repair or a complete remodel, our experienced team brings professionalism and expertise to every project. We treat your property with respect and work diligently to exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const isOrange = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 ${isOrange ? 'hover:bg-orange-50' : 'hover:bg-blue-50'} transition-colors duration-200`}
                >
                  <div className={`${isOrange ? 'bg-gradient-to-br from-orange-600 to-orange-500' : 'bg-gradient-to-br from-blue-600 to-blue-500'} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-slate-900 text-lg">
                    {highlight.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
