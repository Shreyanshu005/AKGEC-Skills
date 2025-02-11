import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'FABLAB',
    logo: '../../public/fablab.jpg'
  },
  {
    id: 2,
    name: 'CII',
    logo: '../../public/cii.jpg'
  },
  {
    id: 3,
    name: 'CGSC',
    logo: '../../public/cgsc.jpg'
  },
  {
    id: 4,
    name: 'ASDC',
    logo: '../../public/asdc.jpg'
  },
  {
    id: 5,
    name: 'AIA',
    logo: '../../public/aia.jpg'
  },
  {
    id: 6,
    name: 'AWS-1',
    logo: '../../public/aws-1.jpg'
  },
  {
    id: 7,
    name: 'GMA',
    logo: '../../public/gma.jpg'
  },
  {
    id: 8,
    name: 'IAM',
    logo: '../../public/iam.jpg'
  },
  {
    id: 8,
    name: 'IASC-1',
    logo: '../../public/iasc-1.jpg'
  },
  {
    id: 8,
    name: 'ISA',
    logo: '../../public/isa.jpg'
  },
  {
    id: 8,
    name: 'NSDC',
    logo: '../../public/NSDC.jpg'
  },
  {
    id: 8,
    name: 'WADHWANI',
    logo: '../../public/wadhwani.jpg'
  }
];

const AssociatePartners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-navy-900">Associate Partners</h2>
       
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        speed={500} // Transition speed in milliseconds
        autoplay={{
          delay: 2000, // 2 seconds delay between slides
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        slidesPerGroup={1} // Move one slide at a time
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
        className="partner-slider"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-24 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AssociatePartners; 