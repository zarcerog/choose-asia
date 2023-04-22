import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed';

const Skills = ({nav}) => {  
  return (
    <div 
      className={
        nav
          ? 'hidden'
          : 'flex flex-col lg:flex-row justify-center items-center pt-32 gap-8 mx-8'}
      >
        <div className='h-full w-full'>
            <YouTubeEmbed embedId='d0O6Yr3Sc54' />
        </div>
        <div className='h-full w-full'>
            <YouTubeEmbed embedId='eTOD1yWqMCA' />
        </div>
    </div>
  );
};

export default Skills;
