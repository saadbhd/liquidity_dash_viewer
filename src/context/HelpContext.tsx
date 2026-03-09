// ============================================================================
// Help Context — allows Layer 2 "See more" to open FloatingHelp at a specific entry
// ============================================================================

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface HelpContextValue {
    /** Currently open glossary key (null = modal closed) */
    activeGlossaryKey: string | null;
    /** Is the help modal open? */
    isOpen: boolean;
    /** Open modal, optionally scrolled to a specific glossary entry */
    openHelp: (glossaryKey?: string) => void;
    /** Close modal */
    closeHelp: () => void;
}

const HelpContext = createContext<HelpContextValue | null>(null);

export function useHelp(): HelpContextValue {
    const ctx = useContext(HelpContext);
    if (!ctx) throw new Error('useHelp must be used within a HelpProvider');
    return ctx;
}

export function HelpProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeGlossaryKey, setActiveGlossaryKey] = useState<string | null>(null);

    const openHelp = useCallback((glossaryKey?: string) => {
        setActiveGlossaryKey(glossaryKey ?? null);
        setIsOpen(true);
    }, []);

    const closeHelp = useCallback(() => {
        setIsOpen(false);
        setActiveGlossaryKey(null);
    }, []);

    return (
        <HelpContext.Provider value={{ activeGlossaryKey, isOpen, openHelp, closeHelp }}>
            {children}
        </HelpContext.Provider>
    );
}
