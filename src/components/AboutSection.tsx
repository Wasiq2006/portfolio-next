import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I am a computer science student with a strong focus on cybersecurity.
          My journey began during college when I was introduced to the OSI
          model, which sparked my interest in understanding how systems
          communicate and where vulnerabilities can arise. From there, I
          developed a deeper passion for cybersecurity, exploring its core
          concepts, tools, and real-world applications.
        </p>
        <p className="body-text max-w-2xl mt-6">
          While working with Linux environments, I also developed a growing
          interest in DevOps. This exposure helped me understand system
          automation, deployment workflows, and the importance of efficient,
          scalable infrastructure in modern computing.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          To strengthen my understanding, I regularly build hands-on projects
          in cybersecurity and DevOps, allowing me to apply theoretical
          knowledge in practical scenarios. I am driven by curiosity and a
          commitment to continuous learning, aiming to stay aligned with
          emerging trends while building a strong and versatile technical
          foundation.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
