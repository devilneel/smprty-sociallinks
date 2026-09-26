import React, { useState } from 'react';
import { SOCIAL_LINKS, CREATOR_PROFILE } from './data/links';
import { HeaderTopBar } from './components/HeaderTopBar';
import { ProfileHero } from './components/ProfileHero';
import { LinkCard } from './components/LinkCard';
import { CollabModal } from './components/CollabModal';

export default function App() {
  const [isCollabOpen, setIsCollabOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 flex flex-col antialiased">
      {/* Minimal Top Header */}
      <HeaderTopBar />

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-lg mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Creator Bio Header */}
        <ProfileHero
          onOpenCollab={() => setIsCollabOpen(true)}
        />

        {/* Clean Minimal Vertical Stack of All Links */}
        <section className="mt-6 space-y-3" aria-label="Social media links">
          {SOCIAL_LINKS.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              onOpenCollab={() => setIsCollabOpen(true)}
            />
          ))}
        </section>

        {/* Minimal Collaboration Card */}
        <section className="mt-8 p-5 rounded-2xl bg-white border border-zinc-200/80 text-center shadow-xs">
          <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
            Partnerships & Projects
          </p>
          <h3 className="text-base font-bold text-zinc-900 mb-1 font-display">
            Want to work together?
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed max-w-sm mx-auto mb-4">
            Available for brand collaborations, sponsorships, content creation, and freelance development.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setIsCollabOpen(true)}
              className="px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors shadow-xs active:scale-95"
            >
              Get in Touch
            </button>
            <a
              href="https://whatsapp.com/channel/0029VbCtAA66BIEeBBZBqZ39"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200/80 rounded-xl transition-colors"
            >
              WhatsApp Updates
            </a>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full border-t border-zinc-200/70 py-6 text-center text-xs text-zinc-500 bg-white">
        <div className="max-w-lg mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="tracking-tight text-zinc-600">
            © {new Date().getFullYear()} {CREATOR_PROFILE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-zinc-600">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-zinc-900 transition-colors"
            >
              Top
            </button>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <a
              href={`mailto:${CREATOR_PROFILE.email}`}
              className="hover:text-zinc-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Collaboration Modal */}
      <CollabModal
        isOpen={isCollabOpen}
        onClose={() => setIsCollabOpen(false)}
      />
    </div>
  );
}
