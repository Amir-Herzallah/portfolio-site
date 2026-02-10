import { Building2 } from 'lucide-react';
import wileyLogo from '../assets/wiley.png';
import safeLogo from '../assets/safe.png';
import tahalufLogo from '../assets/tahaluf.jpeg';
import payoneLogo from '../assets/payone.png';

const companyLogos = {
  'Wiley/Atypon': { type: 'image', src: wileyLogo, alt: 'Wiley/Atypon' },
  'Safe App': { type: 'image', src: safeLogo, alt: 'Safe App' },
  'Tahaluf Al-Emarat Technical Solutions': { type: 'image', src: tahalufLogo, alt: 'Tahaluf Al-Emarat Technical Solutions' },
  'PayOne': { type: 'image', src: payoneLogo, alt: 'PayOne' },
};

const imageSizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-9 h-9',
  lg: 'w-12 h-12',
};

const emojiSizeClasses = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-5xl',
};

export default function CompanyLogo({ company, size = 'md' }) {
  const logo = companyLogos[company];

  if (logo) {
    if (typeof logo === 'object' && logo.type === 'image') {
      return (
        <div className={`${imageSizeClasses[size]} flex shrink-0 items-center justify-center overflow-hidden rounded`}>
          <img
            src={logo.src}
            alt={logo.alt ?? company}
            className="h-full w-full object-contain"
          />
        </div>
      );
    }
    return (
      <div className={`${emojiSizeClasses[size]} flex items-center justify-center`}>
        {logo}
      </div>
    );
  }

  return <Building2 className={size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-8 h-8' : 'w-7 h-7'} />;
}
