import React from 'react';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center py-20">
          <div className="text-center">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-black pb-6 sm:pb-2 md:pb-3 lg:pb-4 text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold tracking-tight lg:mt-1"
            >
              Set Up To Wellness
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-black my-2 max-w-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 font-light tracking-tighter"
            >
              We offer services and sustainable products that support a healthier lifestyle and promote wellness.
            </motion.p>
          </div>
        </div>
      </div>
  );
};

export default Content;