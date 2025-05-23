import React from 'react';
import ServiceCard from './ServiceCard';

export default function ListServices({ infoservice }) {
  return (
    <ul className="w-full md:w-[50%] flex flex-col justify-start md:py-12">
      <div className="md:ml-auto lg:pr-4 flex flex-wrap lg:flex-col items-baseline justify-start">
        {infoservice.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </ul>
  );
}