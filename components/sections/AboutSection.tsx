import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            I am a passionate self-taught developer with over a year of
            JavaScript experience, striving to become a Full Stack Developer.
            I’m mastering tools like Linux, AWS, CI/CD, Docker, and Terraform to
            build efficient and secure solutions.
          </p>

          <p className="text-base text-gray-400">
            With expertise in frontend frameworks like React, Next.js, and React
            Native, and backend skills in Node.js, Express, and MongoDB, I
            bridge design and development through Figma and follow best
            practices like SOLID principles and clean architecture.
          </p>

          <p className="text-base text-gray-400">
            I also work on personal projects, leveraging AI and APIs to create
            innovative solutions that solve problems and inspire users.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills & Tools
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about 2 years ago. I have tried a
            few programming languages and technology stack, both Backend and
            Frontend.
          </p>

          <p className="text-base text-gray-400">
            Though web dev's vast, I'm keen on Frontend. As a UI/UX enthusiast,
            I adore its aesthetics and focus.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ProcessWork />
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
