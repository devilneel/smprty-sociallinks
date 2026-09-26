export interface SocialLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  category: 'featured' | 'social' | 'channel' | 'connect';
  type: 'url' | 'email';
  handle?: string;
  icon: string;
  description?: string;
}

export interface CreatorProfile {
  name: string;
  handle: string;
  bio: string;
  tagline: string;
  location: string;
  avatarFallback: string;
  email: string;
  verified: boolean;
}

export const CREATOR_PROFILE: CreatorProfile = {
  name: 'Samprity Das',
  handle: '@smprty_',
  tagline: 'Creative Developer & Digital Content Creator',
  bio: 'Crafting digital experiences, visual storytelling & sharing tech, design, and lifestyle insights.',
  location: 'Kolkata, India',
  avatarFallback: 'SD',
  email: 'sampritydas06@gmail.com',
  verified: true,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'smprtyportfolio.netlify.app',
    url: 'https://smprtyportfolio.netlify.app/',
    category: 'featured',
    type: 'url',
    icon: 'Globe',
    description: 'Explore my latest development projects and interactive web builds.',
  },
  {
    id: 'instagram-main',
    title: 'Instagram',
    subtitle: '@smprty_',
    url: 'https://www.instagram.com/smprty_/',
    category: 'social',
    type: 'url',
    handle: '@smprty_',
    icon: 'Instagram',
  },
  {
    id: 'instagram-personal',
    title: 'Instagram (Personal)',
    subtitle: '@itssmprty_',
    url: 'https://www.instagram.com/itssmprty_/',
    category: 'social',
    type: 'url',
    handle: '@itssmprty_',
    icon: 'Instagram',
  },
  {
    id: 'instagram-channel',
    title: 'Instagram Channel',
    subtitle: 'Exclusive updates & chat',
    url: 'https://www.instagram.com/channel/AbZkXjDtEK-2-dty/',
    category: 'channel',
    type: 'url',
    icon: 'Radio',
  },
  {
    id: 'whatsapp-channel',
    title: 'WhatsApp Channel',
    subtitle: 'Instant announcements & community',
    url: 'https://whatsapp.com/channel/0029VbCtAA66BIEeBBZBqZ39',
    category: 'channel',
    type: 'url',
    icon: 'MessageSquare',
  },
  {
    id: 'facebook-page',
    title: 'Facebook Page',
    subtitle: 'Official Creator Page',
    url: 'https://www.facebook.com/share/1DweNy8fks/?mibextid=wwXIfr',
    category: 'social',
    type: 'url',
    icon: 'Facebook',
  },
  {
    id: 'threads',
    title: 'Threads',
    subtitle: '@smprty_',
    url: 'https://www.threads.com/@smprty_',
    category: 'social',
    type: 'url',
    handle: '@smprty_',
    icon: 'AtSign',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    subtitle: 'Samprity Das Official',
    url: 'https://www.youtube.com/channel/UCJ6yhxQnd41qDXtGO-mzlFQ',
    category: 'channel',
    type: 'url',
    icon: 'Youtube',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'samprity-das',
    url: 'https://www.linkedin.com/in/samprity-das-b304aa362/',
    category: 'featured',
    type: 'url',
    icon: 'Linkedin',
  },
];
