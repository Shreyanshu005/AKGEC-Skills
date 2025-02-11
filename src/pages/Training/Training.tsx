import React, { useState } from 'react';
// import Slider from '../../components/slider';   
import AssociatePartners from '../../components/AssociatePartners';
import SkillsGlance from '../../components/SkillsGlance';

// Define types for our data structures
type ProgramCard = {
  title: string;
  category: string;
  description: string;
  levels?: string;
  duration: string;
  imageSrc: string;
};

type Category = {
  id: string;
  name: string;
  icon: string;
};

// Group categories into pages - 4 on first page, 3 on second
const categoryPages: Category[][] = [
  [
    { id: 'robotics', name: 'Robotics', icon: '🤖' },
    { id: 'automation', name: 'Automation', icon: '⚙️' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'welding', name: 'Welding', icon: '🔧' },
  ],
  [
    { id: 'design', name: 'Design', icon: '🔨' },
    { id: 'iot', name: 'Embedded & IOT & 3D Printing', icon: '✓' },
    { id: 'instrumentation', name: 'Virtual Instrumentation', icon: '💻' },
  ]
];

const programCards: Record<string, ProgramCard[]> = {
  robotics: [
    {
      title: 'Industrial Robot Programming',
      category: 'Training',
      description: 'Basic | Advance | Expert',
      duration: 'Two Weeks Program for Engineers',
      imageSrc: '/api/placeholder/400/300',
    },
    {
      title: 'Robot Cell Designer',
      category: 'Training',
      description: 'Basic | Advance',
      duration: 'One Week Program for Engineers',
      imageSrc: '/api/placeholder/400/300',
    }
  ],
  automation: [
    {
      title: 'Robot Programming & Simulation',
      category: 'Industrial Training Program',
      description: 'Basic | Advance | Expert',
      duration: 'Six Weeks Summer Program for Engineering Students',
      imageSrc: '/api/placeholder/400/300',
    },
  ],
  manufacturing: [
    {
      title: 'Industrial Robotics',
      category: 'Industrial Internship',
      description: 'Operation | Programming | Applications',
      duration: 'Six Months Program for Students',
      imageSrc: '/api/placeholder/400/300',
    },
  ],
  welding: [
    {
      title: 'Robot Operation & Applications',
      category: 'Workshop',
      description: 'Industrial Robotics',
      duration: 'One Day Program for Beginners',
      imageSrc: '/api/placeholder/400/300',
    },
  ],
  design: [
    {
      title: 'Design',
      category: 'Workshop',
      description: 'Design',
      duration: 'Three Days Program',
      imageSrc: '/api/placeholder/400/300',
    },
  ],
  iot: [
    {
      title: 'Embedded & IOT & 3D Printing',
      category: 'Workshop',
      description: 'Industrial QC',
      duration: 'Two Days Program',
      imageSrc: '/api/placeholder/400/300',
    },
  ],
  instrumentation: [
    {
      title: 'Virtual Instrumentation',
      category: 'Workshop',
      description: 'Industrial Programming',
      duration: 'Four Days Program',
      imageSrc: '/api/placeholder/400/300',
    },
  ],
};

const Training = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('robotics');

  const handleNextPage = () => {
    const nextIndex = (currentPageIndex + 1) % categoryPages.length;
    setCurrentPageIndex(nextIndex);
    setActiveCategory(categoryPages[nextIndex][0].id);
  };

  const handlePrevPage = () => {
    const prevIndex = currentPageIndex === 0 ? categoryPages.length - 1 : currentPageIndex - 1;
    setCurrentPageIndex(prevIndex);
    setActiveCategory(categoryPages[prevIndex][0].id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-navy-900 mb-6">Training Programs</h1>
        <p className="text-gray-600 max-w-4xl mx-auto">
          ASF offers Technical / Vocational Training Programs for Engineering / Diploma / ITI / 12th or 10th Students for making them Industry Ready and Globally Employable. ASF also conducts Up-skilling training programs for Industry Professionals to make them technically competent to meet Global Industry requirements.
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrevPage}
          className="p-2 rounded-full bg-navy-900 text-white hover:bg-navy-700"
        >
          <svg className="w-6 h-6" fill="" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2">
          {categoryPages[currentPageIndex].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          className="p-2 rounded-full bg-navy-900 text-white hover:bg-navy-700"
        >
          <svg className="w-6 h-6" fill="" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {programCards[activeCategory]?.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={program.imageSrc}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-yellow-500 font-semibold mb-2">
                {program.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-2">{program.description}</p>
              <p className="text-gray-500 text-sm">{program.duration}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Slider /> */}
      <AssociatePartners />
      <SkillsGlance />
    </div>
  );
};

export default Training;