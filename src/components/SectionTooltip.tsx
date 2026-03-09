// ============================================================================
// LAYER 1 — Section-level tooltip (? next to section headers)
// Shows a high-level description of what the section covers.
// ============================================================================

import { HelpCircle } from "lucide-react";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip";
import { SECTION_TOOLTIPS } from "@/data/sectionTooltips";

interface Props {
    sectionKey: string;
    size?: "sm" | "md";
}

export function SectionTooltip({ sectionKey, size = "md" }: Props) {
    const entry = SECTION_TOOLTIPS[sectionKey];
    if (!entry) return null;

    const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <HelpCircle className={iconSize} />
                </button>
            </TooltipTrigger>
            <TooltipContent
                side="top"
                className="max-w-sm bg-popover border border-border px-4 py-3"
            >
                <p className="font-semibold text-sky-600 dark:text-sky-400 text-sm">
                    {entry.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {entry.description}
                </p>
            </TooltipContent>
        </Tooltip>
    );
}
