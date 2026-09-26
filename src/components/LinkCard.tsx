import React from 'react';
import { 
  Mail, 
  Radio, 
  ArrowRight
} from 'lucide-react';
import { GlobeIcon } from './BrandIcons';
import { SocialLink } from '../data/links';
import { 
  InstagramIcon, 
  ThreadsIcon, 
  WhatsAppIcon, 
  YouTubeIcon, 
  LinkedInIcon, 
  FacebookIcon 
} from './BrandIcons';

interface LinkCardProps {
  link: SocialLink;
  onOpenCollab?: () => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, onOpenCollab }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (link.type === 'email' && onOpenCollab) {
      e.preventDefault();
      onOpenCollab();
    }
  };

  const renderIcon = () => {
    switch (link.id) {
      case 'portfolio':
        return <GlobeIcon className="w-4 h-4 text-zinc-800" />;
      case 'collab-email':
        return <Mail className="w-4 h-4 text-zinc-800" />;
      case 'instagram-main':
      case 'instagram-personal':
        return <InstagramIcon className="w-4 h-4 text-pink-600" />;
      case 'instagram-channel':
        return <Radio className="w-4 h-4 text-purple-600" />;
      case 'whatsapp-channel':
        return <WhatsAppIcon className="w-4 h-4 text-emerald-600" />;
      case 'youtube':
        return <YouTubeIcon className="w-4 h-4 text-red-600" />;
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4 text-sky-700" />;
      case 'threads':
        return <ThreadsIcon className="w-4 h-4 text-zinc-900" />;
      case 'facebook-page':
        return <FacebookIcon className="w-4 h-4 text-blue-600" />;
      default:
        return <GlobeIcon className="w-4 h-4 text-zinc-800" />;
    }
  };

  const isEmail = link.type === 'email';

  return (
    <div className="relative group">
      <a
        href={link.url}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        onClick={handleClick}
        className="relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xs transition-all duration-200 active:scale-[0.99]"
      >
        <div className="flex items-center gap-3.5 flex-1 min-w-0 pr-3">
          {/* Platform Icon Box */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-50 border border-zinc-200/70 flex items-center justify-center shrink-0 group-hover:bg-zinc-100 transition-colors">
            {renderIcon()}
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xs sm:text-sm font-semibold text-zinc-900 tracking-tight truncate group-hover:text-black transition-colors">
              {link.title}
            </h2>
            <p className="text-[11px] font-mono text-zinc-500 truncate">
              {link.subtitle}
            </p>
          </div>
        </div>

        {/* Clean minimal action arrow */}
        <div className="p-1.5 text-zinc-400 group-hover:text-zinc-800 group-hover:translate-x-0.5 transition-all shrink-0">
          <ArrowRight className="w-4 h-4" />
        </div>
      </a>
    </div>
  );
};
