
import React from 'react';
import { PUBLICATIONS } from '../constants';
import { Publication } from '../types';

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => (
    <div className="border border-white/10 rounded-lg p-4 mb-4 bg-white/5">
        <h3 className="font-semibold text-lg text-sky-300">{pub.title}</h3>
        <p className="text-xs text-white/60 mt-1">{pub.meta}</p>
        <p className="text-sm text-white/80 mt-2">{pub.authors}</p>
        <p className="mt-2 text-white/90">{pub.abstract}</p>
        <a 
            href={pub.doi} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 px-3 py-1 text-xs border border-white/30 rounded-md hover:bg-sky-500 hover:border-sky-500 transition-colors"
        >
            View DOI
        </a>
    </div>
);

const Publications: React.FC = () => {
    return (
        <div>
            <h2 className="major text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white pb-2 mb-6">Publications</h2>
            <div>
                {PUBLICATIONS.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} />
                ))}
            </div>
        </div>
    );
};

export default Publications;
