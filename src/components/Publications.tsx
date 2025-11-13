
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PUBLICATIONS } from '../constants';
import { Publication } from '../types';

const PublicationCard: React.FC<{ pub: Publication; index: number }> = ({ pub, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.0006, delay: index * 0.0002 }}
            className="glass glass-hover rounded-lg p-6 mb-6 border relative overflow-hidden group"
        >
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-400 to-slate-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-150 origin-top"></div>

            <div className="relative z-10 ml-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.0002 + 0.0002 }}
                    className="flex items-start justify-between gap-4"
                >
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-gradient mb-2 leading-tight">
                            {pub.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                            <i className="fas fa-calendar-alt"></i>
                            <span>{pub.meta}</span>
                        </div>
                    </div>
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="text-slate-400 text-2xl"
                    >
                        <i className="fas fa-book-open"></i>
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.0002 + 0.0003 }}
                    className="text-sm text-slate-200 font-medium mb-3"
                >
                    <i className="fas fa-users mr-2"></i>
                    {pub.authors}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.0002 + 0.0004 }}
                    className="text-sm text-white/80 leading-relaxed mb-4"
                >
                    {pub.abstract}
                </motion.p>

                <motion.a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.0002 + 0.0005 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-slate-500/50 rounded-md bg-slate-500/10 hover:bg-slate-600 hover:border-slate-600 text-slate-300 hover:text-white transition-all shadow-lg shadow-slate-500/0 hover:shadow-slate-600/50"
                >
                    <i className="fas fa-external-link-alt"></i>
                    View Publication
                </motion.a>
            </div>
        </motion.div>
    );
};

const Publications: React.FC = () => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white/20 pb-2 mb-6 text-gradient"
            >
                Publications
            </motion.h2>
            <div>
                {PUBLICATIONS.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Publications;
