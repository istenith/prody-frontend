import React from 'react';
import "./supporter.css";
const SupporterCard = ({ title, content }) => (
  <div className="supportcard m-auto bg-gray-600 p-2 rounded-lg shadow-lg" >
    <img src="https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" alt="supporter" className="card-img rounded m-auto h-2/3  w-5/6"/> 
    <h3 className="text-center text-white text-lg font-semibold truncate">{title}</h3>
    <p className="text-center text-white text-m overflow-ellipsis overflow-hidden">{content}</p>
  </div>
);

// Sample data for the supporters
const supporters = [
  { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' },
  { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2' },
  { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' },
  { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2' },
  { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' },
  { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2' },


  // ... other supporters
];
const olds = [
  { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' },
  { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2' },
  { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' },


  // ... other previous sponsers
];
const partners = [
  { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' },
  { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2' },
  { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' },


  // ... other previous sponsers
];


const SupportersComponent = () => (
  <div className="items-center text-white p-8">
    <h2 className=" text-center text-4xl font-bold mb-4">OUR SUPPORTERS</h2>
    <h3 className="text-center text-xl font-bold mt-12 mb-4">SPONSORS & PARTNERS //</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 mb-8">
      {supporters.map(supporter => (
        <SupporterCard key={supporter.id} title={supporter.title} content={supporter.content} />
      ))}
    </div>
    <h3 className="text-center text-xl font-bold mt-12 mb-4">Past Production and Program Sponsors</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mb-8">
    {olds.map(supporter => (
        <SupporterCard key={supporter.id} title={supporter.title} content={supporter.content} />
      ))}
    </div>
    <h3 className="text-center text-xl font-semibold mt-20 mb-4">Proud Partnership With:</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mb-8">
    {partners.map(supporter => (
        <SupporterCard key={supporter.id} title={supporter.title} content={supporter.content} />
      ))}
    </div>
    <div>
      <h3 className="font-semibold mb-2">WHAT IS ISTE?</h3>
      <p className="text-sm mb-4">
        The Indian Society for Technical Education (ISTE) is the leading National
        Professional non-profit making Society for the Technical Education System
        in our country. The Students Chapter NIT Hamirpur is the representative at
        NIT Hamirpur to promote such technical culture in our college. We at NIT-H,
        conduct various events within the college and also participate in inter-college fests.
      </p>
    </div>

  </div>
  
);

export default SupportersComponent;
