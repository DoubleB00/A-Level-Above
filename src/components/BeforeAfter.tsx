import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  before: string;
  after: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Entry Door Replacement',
    before: '/att.rexb9hc1m3hdgh0_yghffzkhdbtd1qai2ksqnv0hmfy.jpg',
    after: '/att.ultbxyjojckg7bbad62mp2bgagrqv6fxdmdb59czqeg.jpg',
  },
  {
    id: 2,
    title: 'Staircase Renovation',
    before: '/att.tbsdejehxst4wu_ncz_j0-l6pmewasmaovqy-vquzu8.jpg',
    after: '/att.gw3dwt14vlmq7nqlwfao5gtxocodyxfn_or-rua3qwe.jpg',
  },
  {
    id: 3,
    title: 'Exterior Siding Installation',
    before: '/att.k-nfrw1p1upnuy71v7oookzryhft1vwi79cepkxnvpo.jpg',
    after: '/att.eddlcd3h4djpgntnpf2jz5j2iiij6k4i8kjygdkldu4.jpg',
  },
];

export default function BeforeAfter() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Recent Before & After Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See the difference our professional service makes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 text-center">
                {project.title}
              </h3>

              <div className="relative group cursor-pointer" onClick={() => openLightbox(project.before)}>
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                    BEFORE
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <img
                  src={project.before}
                  alt={`${project.title} - Before`}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="relative group cursor-pointer" onClick={() => openLightbox(project.after)}>
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                    AFTER
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <img
                  src={project.after}
                  alt={`${project.title} - After`}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
