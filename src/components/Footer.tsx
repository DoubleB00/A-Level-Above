import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
              A Level Above<br />Construction LLC
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Professional home improvement and construction services throughout New Jersey.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:732-867-4805"
                className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-orange-500" />
                732-867-4805
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-500" />
                info@alevelaboveconstruction.com
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Service Areas</h4>
            <div className="flex items-start gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p>Middlesex County</p>
                <p>Monmouth County</p>
                <p>Somerset County</p>
                <p>Mercer County</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              &copy; {currentYear} A Level Above Construction LLC. All rights reserved.
            </p>
            <p className="text-yellow-400 font-bold text-center sm:text-right">
              Free Estimates Available
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
