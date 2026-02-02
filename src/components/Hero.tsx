import { Phone, Mail } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '732-867-4805';

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoLThWMTZoOHptLTQgNHY0aDR2LTRoLTR6Ie8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/att.eddlcd3h4djpgntnpf2jz5j2iiij6k4i8kjygdkldu4.jpg"
              alt="A Level Above Construction LLC"
              className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Reliable Home Improvement<br className="hidden sm:block" /> & Construction Services
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto font-semibold">
            Serving Middlesex, Monmouth, Somerset & Mercer Counties
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${phoneNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-orange-400"
            >
              <Phone className="w-6 h-6" />
              Call Now: {phoneNumber}
            </a>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-blue-400"
            >
              <Mail className="w-6 h-6" />
              Get Free Estimate
            </button>
          </div>

          <div className="mt-12 text-yellow-400 text-sm sm:text-base">
            <p className="font-bold">Free Estimates Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
