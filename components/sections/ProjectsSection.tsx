'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimationContainer, SectionContainer } from '../utils';
import { AllProjects } from '../content/AllProjects';

const animation = {
  hide: { y: -12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const allProjectsInfo = [
  {
    id: '1',
    title: 'MapsApp',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio amet modi iste voluptatem.',
    category: 'react - typescript',
    repo: 'https://github.com/jeandv/maps-app',
    link: 'https://mapsapp.vercel.app'
  },
  {
    id: '2',
    title: 'Pokedex ISR',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio amet modi iste voluptatem.',
    category: 'next.js - typescript',
    repo: 'https://github.com/jeandv/pokedex-next',
    link: 'https://pokedex-jeandv.vercel.app'
  },
  {
    id: '3',
    title: 'Github Issues',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio amet modi iste voluptatem.',
    category: 'react - react query - typescript',
    repo: 'https://github.com/jeandv/react-query',
    link: 'https://github.com/jeandv/react-query'
  },
  {
    id: '4',
    title: 'OpenJira',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio amet modi iste voluptatem.',
    category: 'next.js - typescript - node - mongoDB',
    repo: 'https://github.com/jeandv/open-jira',
    link: 'https://open-jira-jeandv.vercel.app'
  },
  {
    id: '5',
    title: 'MisPelis',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio amet modi iste voluptatem.',
    category: 'react - javascript',
    repo: 'https://mispelis.vercel.app',
    link: 'https://github.com/jeandv/mispelis'
  },
  {
    id: '6',
    title: 'Gixfy',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio amet modi iste voluptatem.',
    category: 'react - javascript - jest - wouter',
    repo: 'https://gixfy.vercel.app',
    link: 'https://github.com/jeandv/gixfy'
  }
];

const myGithub = 'https://github.com/jeandv';

export const ProjectsSection = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <SectionContainer>

      <div className='flex flex-col gap-6'>

        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.5 }}
        >
          <h2 className='font-bold text-4xl md:text-5xl tracking-tight mb-8 text-black dark:text-white text-center'>
            Projects
          </h2>
        </motion.div>

        <AnimationContainer customClassName='flex flex-col gap-5 mb-8'>

          <p className='text-gray-600 dark:text-gray-400'>
            These are most of the projects I've done since I started programming, some of them are personal projects, freelance, work, practice or for other situation. If you want to see absolutely all my projects go to my <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-black dark:hover:text-white underline transition-all ease'>GitHub</a>.
          </p>

        </AnimationContainer>

        <AnimationContainer customClassName='group flex flex-col justify-center items-center mb-8'>

          <div className='flex items-center w-3/6 h-12 rounded shadow-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800 group-hover:border-gray-800 dark:group-hover:border-gray-500 transition-all ease'>

            <div className='grid place-items-center h-full w-12 text-gray-700 dark:text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </div>

            <input
              className='peer h-full w-full outline-none rounded text-sm bg-white dark:bg-black px-2 group-hover:border-gray-800 dark:group-hover:border-gray-500 transition-all ease'
              type='text'
              id='search'
              placeholder='Search for programming languages, frameworks, apis...'
              onChange={e => setProjectSearch(e.target.value)} />
          </div>

        </AnimationContainer>

        <article className='w-full flex justify-center items-center content-center flex-wrap gap-6'>
          {
            AllProjects(resultSearch)
          }
        </article>

      </div>

    </SectionContainer>
  )
}