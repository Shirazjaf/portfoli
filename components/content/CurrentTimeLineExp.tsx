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
          Engineered and led the frontend development and maintenance of
          projects, implementing agile methodologies like Trello and adhering to
          best practices such as SOLID principles, pixel-perfect design, clean
          architecture, and clean code. Utilized tools like Jira, SCRUM
          practices, Git, GitFlow, and Bitbucket while leveraging technologies
          such as HTML, CSS, SASS, Tailwind, JavaScript, TypeScript, React,
          Next.js, Redux, and Zustand. Designed and developed microfrontend
          architectures to enable reusable component development. Additionally,
          engineered React Native mobile applications and contributed to
          Python-based solutions to enhance project functionality and
          scalability.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Ambrezent Technologies | 2022 - Mar. 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Designed and developed web pages using agile methodologies, clean
          architecture, SOLID principles, and ensuring pixel-perfect execution
          in all projects. I have worked on a wide range of projects, including
          landing pages, e-commerce stores, blogs, and dashboards.
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
};

export default CurrentTimeLineExp;
