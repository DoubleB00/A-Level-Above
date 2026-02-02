import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:info@alevelaboveconstruction.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free, no-obligation estimate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <a
                href="tel:732-867-4805"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200 group"
              >
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="text-xl font-bold text-slate-900 group-hover:text-orange-600">
                    732-867-4805
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Click to call now
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="bg-gradient-to-br from-blue-600 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    info@alevelaboveconstruction.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Service Areas
                  </p>
                  <p className="text-slate-900 font-semibold">
                    Middlesex, Monmouth,<br />
                    Somerset & Mercer Counties
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 border-2 border-blue-400"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
