import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        Currently working as Product Engineer, what I love most about being a
        product engineer is collaborating with others to create products that
        make a difference. I enjoy blending my creativity and coding skills
        which helps me bridge the gap between design and engineering when
        working with engineers. <br />In a nutshell, I'm all about
        innovation, collaboration, and making a positive impact through design.
        Feel free to explore my portfolio and learn more about my journey so
        far.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
