import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '732-867-4805';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 lg:hidden border-2 border-orange-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Call now"
    >
      <div className="flex items-center gap-2 px-5 py-4">
        <Phone className="w-6 h-6" />
        <span className="font-bold text-lg">Call Now</span>
      </div>
    </a>
  );
}
