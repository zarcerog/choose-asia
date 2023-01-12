import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const Skills = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center pt-32 h-screen w-screen'>
        <div className='h-full w-full m-10 p-24 xl:m-6 xl:p-6 md:p-10 md:m-10'>
            <YouTubeEmbed embedId='d0O6Yr3Sc54' />
        </div>
        <div className='h-full w-full m-10 px-24 xl:m-6 xl:p-6 md:p-10 md:m-10'>
            <YouTubeEmbed embedId='eTOD1yWqMCA' />
        </div>
    </div>
  );
};

export default Skills;
