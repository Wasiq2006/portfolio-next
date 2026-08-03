import SectionBlock from './SectionBlock';
import AnimatedAvatar from './AnimatedAvatar';

const AboutSection = () => {
  return (
    <SectionBlock id="about" title="About me">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <AnimatedAvatar />
        <div className="flex-1">
          <p className="body-text max-w-2xl">
            I am a Computer Science student with a strong interest in Cybersecurity and Cloud Security. My journey into technology started during college when I learned about the OSI model, which sparked my curiosity about how systems communicate and where vulnerabilities exist. This led me to explore cybersecurity in depth, focusing on practical skills, tools, and real-world problem solving.
          </p>
          <p className="body-text max-w-2xl mt-6">
            As I gained experience working with Linux systems and networking, I developed a growing interest in Cloud Security, including securing cloud infrastructure, identity and access management, network security, and cloud-native technologies. I enjoy understanding how secure, scalable, and resilient systems are designed and maintained.
          </p>
          <p className="body-text max-w-2xl mt-6 mb-8">
            I am actively building hands-on projects to strengthen my skills in cybersecurity and cloud security, with a focus on applying what I learn in practical environments. I am passionate about continuous learning and staying updated with emerging technologies, aiming to build a strong career in cloud security.
          </p>
        </div>
      </div>
    </SectionBlock>
  );
};

export default AboutSection;
