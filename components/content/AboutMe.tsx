import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        Currently working as a Product Engineer, I thrive on collaborating with
        others to create meaningful products. I love blending creativity with
        coding, bridging the gap between design and engineering to deliver
        impactful solutions. In a nutshell, I’m passionate about innovation,
        teamwork, and making a positive impact through design. Feel free to
        explore my portfolio to learn more about my journey
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
