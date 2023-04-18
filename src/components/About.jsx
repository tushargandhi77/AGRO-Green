import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';



const ProjectCard = ({ index,  description,  image}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

        </div>

        <div className='mt-5'>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}
const About = () => {
  return (
    <>
      <motion.dev variant={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview and Current Scnerio</h2>
      </motion.dev>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A welll designed app for farmers and industries to notify about their produce as well as requirements.
        A robust app to control all the logistics data and management for working professionals.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index=
          {index} {...service} />
        ))}
      </div> */}

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")