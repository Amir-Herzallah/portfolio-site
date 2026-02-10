import {
  SiJava,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDotnet,
  SiPerl,
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiMongodb,
  SiRedis,
  SiMicrosoftsqlserver,
  SiDocker,
  SiAzuredevops,
  SiGit,
  SiGithub,
  SiLinux,
  SiGnubash,
  SiRabbitmq,
  SiApachekafka,
  SiSocketdotio,
} from 'react-simple-icons';

const iconMap = {
  'Java': SiJava,
  'Spring Boot': SiSpring,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'NestJS': SiNestjs,
  'ASP.NET': SiDotnet,
  'Perl': SiPerl,
  'React': SiReact,
  'Angular': SiAngular,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Oracle': SiOracle,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'SQL Server': SiMicrosoftsqlserver,
  'Docker': SiDocker,
  'Azure DevOps': SiAzuredevops,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Linux': SiLinux,
  'Bash': SiGnubash,
  'RabbitMQ': SiRabbitmq,
  'Kafka': SiApachekafka,
  'WebSockets': SiSocketdotio,
};

export default function TechIcon({ name, size = 20 }) {
  // Try to find exact match or partial match
  const iconName = Object.keys(iconMap).find(key => 
    name.toLowerCase().includes(key.toLowerCase()) ||
    key.toLowerCase().includes(name.toLowerCase())
  );
  
  const Icon = iconName ? iconMap[iconName] : null;

  if (!Icon) return null;

  return (
    <Icon 
      size={size} 
      className="inline-block"
      style={{ verticalAlign: 'middle' }}
    />
  );
}
