import { Building2 } from 'lucide-react';

// You can replace these with actual company logos later
const companyLogos = {
  'Wiley/Atypon': '🏢',
  'Safe App': '🔒',
  'Tahaluf Al-Emarat Technical Solutions': '🏛️',
  'PayOne': '💳',
};

export default function CompanyLogo({ company, size = 'md' }) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
  };

  const logo = companyLogos[company];

  if (logo) {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        {logo}
      </div>
    );
  }

  return <Building2 className={size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-8 h-8' : 'w-7 h-7'} />;
}
