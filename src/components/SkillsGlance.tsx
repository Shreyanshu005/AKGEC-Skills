import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillStat {
  id: number;
  icon: string;
  count: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: SkillStat[] = [
  {
    id: 1,
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
    count: 10,
    suffix: "",
    label: "World Class",
    sublabel: "Centre of Excellence"
  },
  {
    id: 2,
    icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z",
    count: 100,
    suffix: "+",
    label: "Globally Recognised",
    sublabel: "Courses"
  },
  {
    id: 3,
    icon: "M15 2C16.1 2 17 2.9 17 4V6H3V4C3 2.9 3.9 2 5 2H15ZM19 8V18C19 19.1 18.1 20 17 20H3C1.9 20 1 19.1 1 18V8H19ZM14 12H6V14H14V12Z",
    count: 16,
    suffix: "",
    label: "Global",
    sublabel: "Industry Partners"
  },
  {
    id: 4,
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    count: 80,
    suffix: "+",
    label: "Industry Experts",
    sublabel: "& Trainers"
  },
  {
    id: 5,
    icon: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
    count: 50,
    suffix: "+",
    label: "MoUs with Industry",
    sublabel: "& Academia"
  },
  {
    id: 6,
    icon: "M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42C20.18 17.27 21 15.23 21 13c0-2.74-1.23-5.19-3.16-6.84l-1.42 1.42C17.99 8.86 19 10.82 19 13zm-3-8l-4-4v3c-4.97 0-9 4.03-9 9 0 2.23.82 4.27 2.16 5.84l1.42-1.42C5.59 16.21 5 14.68 5 13c0-3.86 3.14-7 7-7v3l4-4z",
    count: 300,
    suffix: "+",
    label: "Industrial Services",
    sublabel: "& Consultancy"
  }
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60 FPS
      let currentCount = 0;
      
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [end, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const SkillsGlance: React.FC = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AKGEC Skills At A Glance</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-4xl mx-auto">
            AKGEC Skills Foundation, an ISO 9001:2015 Certified and NABL Accredited Facility, is a joint initiative of Ajay Kumar Garg Engineering College (AKGEC) and National Skill Development Corporation (NSDC), Ministry of Skills Development & Entrepreneurship, Govt. of India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 mb-4 text-yellow-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d={stat.icon} />
                </svg>
              </div>
              <div className="text-4xl font-bold mb-2 text-yellow-400">
                <Counter end={stat.count} suffix={stat.suffix} />
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGlance; 