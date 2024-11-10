'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://justkaretech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Justkare Technologies - Mykare Health
          </a>{' '}
          | Oct. 2023 - Present
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and maintenance of projects implementing agile
          methodologies (Trello) and best practices such as SOLID principles,
          pixel perfect, clean architecture, clean code using Jira, SCRUM
          practices, Git, GitFlow practices, Bitbucket, HTML, CSS, SASS,
          Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Zustand and
          using microfrontends to facilitate the use of reusable components.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Ambrezent Technologies | 2022 - Mar. 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies,
          clean architecture, SOLID principles and pixel perfect in all
          projects, I have developed almost all types of projects from Landing
          pages, stores, blogs and dashboards.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          Full Stack Developer Intern | Mar. 2022 - Apr. 2022
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Comprehensive Python Full Stack Internship: Received mentorship and
          guidance while gaining hands-on experience in web development.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
}

export default CurrentTimeLineExp;