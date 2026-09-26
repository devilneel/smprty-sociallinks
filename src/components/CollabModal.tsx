import React, { useState, useEffect } from 'react';
import { X, Mail, Send, Copy, Check } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/links';

interface CollabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CollabModal: React.FC<CollabModalProps> = ({ isOpen, onClose }) => {
  const [selectedIntent, setSelectedIntent] = useState<'sponsorship' | 'freelance' | 'general'>('sponsorship');
  const [clientName, setClientName] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const intents = {
    sponsorship: {
      label: 'Brand Promotion / Sponsorship',
      subject: `Collaboration Inquiry - Brand Promotion ${clientName ? `from ${clientName}` : ''}`,
      body: `Hi Samprity,\n\nI would love to discuss a collaboration/sponsorship opportunity with you.\n\nBrand/Company: ${clientName || '[Your Brand]'}\nDetails: ${customNote || '[Brief overview of the campaign or sponsorship]'}\n\nLooking forward to hearing from you!\n\nBest regards,`,
    },
    freelance: {
      label: 'Freelance Dev & Design',
      subject: `Project Inquiry - Web Development ${clientName ? `with ${clientName}` : ''}`,
      body: `Hi Samprity,\n\nI came across your portfolio and would like to discuss a project with you.\n\nProject Scope: ${customNote || '[Briefly describe your project or timeline]'}\n\nLet's connect!\n\nBest,`,
    },
    general: {
      label: 'General Inquiry',
      subject: `Hello Samprity - Inquiry ${clientName ? `from ${clientName}` : ''}`,
      body: `Hi Samprity,\n\nReaching out to connect regarding: ${customNote || '[Your message here]'}\n\nBest regards,`,
    },
  };

  const currentTemplate = intents[selectedIntent];
  const mailtoUrl = `mailto:${CREATOR_PROFILE.email}?subject=${encodeURIComponent(currentTemplate.subject)}&body=${encodeURIComponent(currentTemplate.body)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white border border-zinc-200 rounded-2xl p-6 shadow-xl text-left z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-700 rounded-full hover:bg-zinc-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-xl bg-zinc-100 text-zinc-900">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-900 font-display">
              Collaborations & Inquiries
            </h3>
            <p className="text-xs text-zinc-500">
              Direct inbox: {CREATOR_PROFILE.email}
            </p>
          </div>
        </div>

        {/* Intent Selector */}
        <div className="mt-4 mb-4">
          <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1.5 block">
            Select Inquiry Type
          </label>
          <div className="flex flex-col gap-1.5">
            {(['sponsorship', 'freelance', 'general'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedIntent(key)}
                className={`px-3 py-2 rounded-xl text-xs text-left transition-all ${
                  selectedIntent === key
                    ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                    : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {intents[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Input fields */}
        <div className="space-y-3 mb-5">
          <div>
            <label className="text-xs font-medium text-zinc-700 block mb-1">
              Your Name or Organization
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="e.g. Acme Corp / Alex"
              className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-700 block mb-1">
              Project Details or Campaign Note
            </label>
            <textarea
              rows={3}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Brief details regarding timeline, budget, or ideas..."
              className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-3 border-t border-zinc-100">
          <a
            href={mailtoUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open in Mail Client</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
