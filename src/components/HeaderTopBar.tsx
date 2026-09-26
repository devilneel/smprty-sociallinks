import React from 'react';
import { Share2, ExternalLink } from 'lucide-react';

export const HeaderTopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-zinc-200/80 bg-white/80 transition-colors">
      <div className="max-w-lg mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a 
          href="/" 
          className="text-sm sm:text-base font-bold tracking-tight text-zinc-900 transition-opacity hover:opacity-80 font-display"
        >
          Samprity Das
        </a>

        {/* Clean minimal action: portfolio only */}
        <div>
          <a
            href="https://smprtyportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <span>Portfolio</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>
      </div>
    </header>
  );
};
