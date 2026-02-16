import { useState } from 'react';
import { 
  Code2,
  Database,
  Cloud,
  Boxes, 
  Workflow, 
  GitBranch, 
  Sparkles, 
  FileCode,
  Users,
  Layers,
  Coffee,
  Server,
  Globe
} from 'lucide-react';

// Map skill names to their logo filenames
// Just add a PNG or SVG file in /public/tech-icons/ with the exact name shown below
// For example: java.png, nodejs.png, react.png, etc.
const imageMap = {
  // Backend
  'Java (Spring Boot)': 'java',
  'Node.js (NestJS, Express)': 'nodejs',
  'ASP.NET Core': 'dotnet',
  'Perl': 'perl',
  
  // Frontend
  'React': 'react',
  'SolidJS': 'solidjs',
  'Angular': 'angular',
  'TypeScript/JavaScript': 'typescript',
  'HTML5/CSS3': 'html5',
  
  // Databases
  'MySQL/PostgreSQL': 'mysql',
  'Oracle Database': 'oracle',
  'SQL Server': 'sqlserver',
  'MongoDB': 'mongodb',
  'Redis': 'redis',
  
  // DevOps
  'Docker': 'docker',
  'CI/CD': 'cicd',
  'Azure DevOps': 'azure',
  'Git/GitHub': 'git',
  'Linux/Bash': 'linux',
  
  // Messaging
  'RabbitMQ': 'rabbitmq',
  'Apache Kafka': 'kafka',
  'WebSockets': 'websocket',
};

// Fallback icons when image is not available
const fallbackIconMap = {
  'Java (Spring Boot)': Coffee,
  'Node.js (NestJS, Express)': Server,
  'ASP.NET Core': Code2,
  'Perl': FileCode,
  'React': Code2,
  'SolidJS': Code2,
  'Angular': Code2,
  'TypeScript/JavaScript': Code2,
  'HTML5/CSS3': Globe,
  'MySQL/PostgreSQL': Database,
  'Oracle Database': Database,
  'SQL Server': Database,
  'MongoDB': Database,
  'Redis': Database,
  'Microservices': Boxes,
  'Event-Driven Architecture': Workflow,
  'Clean Architecture': Layers,
  'SOLID Principles': Sparkles,
  'Docker': Boxes,
  'CI/CD': GitBranch,
  'Azure DevOps': Cloud,
  'Git/GitHub': GitBranch,
  'Linux/Bash': Code2,
  'RabbitMQ': Server,
  'Apache Kafka': Server,
  'WebSockets': Globe,
  'Agile/Scrum': Users,
  'Clean Code': FileCode,
  'Design Patterns': Boxes,
};

export default function TechIcon({ name, size = 20, className = '' }) {
  const [imageError, setImageError] = useState(false);
  const [triedSvg, setTriedSvg] = useState(false);
  const imageName = imageMap[name];
  
  // If image exists and hasn't errored, try to show it
  if (imageName && !imageError) {
    return (
      <img 
        src={triedSvg ? `/tech-icons/${imageName}.svg` : `/tech-icons/${imageName}.png`}
        alt={name}
        width={size}
        height={size}
        className={className}
        style={{ display: 'inline-block', objectFit: 'contain' }}
        onError={() => {
          if (!triedSvg) {
            // First error: try SVG
            setTriedSvg(true);
          } else {
            // Second error: use fallback icon
            setImageError(true);
          }
        }}
      />
    );
  }
  
  // Use fallback lucide icon
  const FallbackIcon = fallbackIconMap[name] || FileCode;
  return <FallbackIcon size={size} className={className} />;
}
