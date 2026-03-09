// ============================================================================
// LAYER 1 — Section-level tooltips (? next to section headers)
// Describes what each dashboard sub-section covers and what insights it gives.
// Keep descriptions plain-language — NO technical/methodology terms here.
// ============================================================================

export interface SectionTooltipEntry {
    title: string;
    description: string;
}

export const SECTION_TOOLTIPS: Record<string, SectionTooltipEntry> = {
    liquidity: {
        title: "Liquidity Health & Peer Comparison",
        description:
            "Shows how easy or hard it is to trade this stock. " +
            "It covers trading value, trading cost, trading activity, and price movement. " +
            "It also shows how the stock compares with peers, its sector, and the wider market.",
    },
    drivers: {
        title: "Drivers of Moves & Sensitivity",
        description:
            "Shows what has been driving the share price lately. " +
            "It separates market, sector, and company-specific effects, and also shows the current driver state and how confident that read is.",
    },
    execution: {
        title: "Execution & Trading Costs",
        description:
            "Shows current displayed trading conditions, what large historical trade sizes would look like if sold now, " +
            "which large sell-side orders were seen during the day, and how spread and visible depth changed through the session.",
    },
    short: {
        title: "Short Selling & Lending",
        description:
            "Shows how active short sellers have been and whether that activity is low, normal, or elevated. " +
            "It also shows how many shares are available to borrow.",
    },
    traders: {
        title: "Trader Type Composition",
        description:
            "Shows the stock's trading persona using behavioral evidence from trade runs, visible depth use, and price reaction. " +
            "It includes the latest mix, confidence of the read, and how that mix has changed over time.",
    },
    "peer-traders": {
        title: "Peer Trader Comparison",
        description:
            "Shows how this stock's trading persona compares with similar names. " +
            "It helps show whether the name looks more retail-like, more institution-like, or simply less clear than peers.",
    },
    "price-moving": {
        title: "Price-Moving Trades",
        description:
            "Shows how often individual trades actually move the price and which trading personas sit behind those moves. " +
            "A higher share usually means the stock is more sensitive to each trade.",
    },
    intraday: {
        title: "Intraday Liquidity Patterns",
        description:
            "Shows when trading happens during the day and whether activity is spread out or concentrated. " +
            "It also shows how much trading happens in auctions versus the main session.",
    },
};
