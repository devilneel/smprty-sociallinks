import React, { useState } from 'react';
import { Mail, Check, CheckCircle2 } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/links';
import profileAvatar from './111adb4d-8d75-4a7b-8886-61700433c607.jpg';

interface ProfileHeroProps {
  onOpenCollab: () => void;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({
  onOpenCollab,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="w-full relative pt-4 pb-2">
      <div className="flex flex-col items-center text-center">
        {/* Minimal Clean Profile DP */}
        <div className="relative mb-3.5">
          <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-full overflow-hidden shadow-md border-2 border-white ring-1 ring-zinc-200/90 bg-zinc-100 flex items-center justify-center">
            <img
              src={profileAvatar}
              alt={CREATOR_PROFILE.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Active indicator dot */}
          <div 
            title="Active & Available" 
            className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white shadow-xs"
          />
        </div>

        {/* Name & Badge */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight font-display">
            {CREATOR_PROFILE.name}
          </h1>
          <CheckCircle2 
            className="w-4 h-4 text-zinc-900 fill-zinc-900/10 shrink-0" 
            aria-label="Verified Profile"
          />
        </div>

        {/* Handle */}
        <p className="text-xs font-semibold text-zinc-500 mb-2">
          {CREATOR_PROFILE.handle}
        </p>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-sm mb-3 text-balance">
          {CREATOR_PROFILE.bio}
        </p>

        {/* Clean Metadata Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-zinc-400 mb-5 font-medium">
          <span>Digital Creator</span>
          <span aria-hidden="true" className="text-zinc-300">·</span>
          <span>{CREATOR_PROFILE.location}</span>
          <span aria-hidden="true" className="text-zinc-300">·</span>
          <span className="text-zinc-700 font-semibold">Available for Collabs</span>
        </div>

        {/* Action Controls Bar */}
        <div className="flex items-center justify-center gap-2.5 w-full max-w-xs">
          {/* Collab CTA */}
          <button
            onClick={onOpenCollab}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-xs active:scale-[0.98]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Inquire / Collab</span>
          </button>

          {/* Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 transition-colors shadow-xs active:scale-[0.98]"
            title="Copy email address"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
