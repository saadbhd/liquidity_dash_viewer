// ============================================================================
// TECHNICAL TERMS GLOSSARY (for help tooltips)
// Shared across all reports - not report-specific
// ============================================================================

export const GLOSSARY = {
    ofi: {
        term: "Order Flow Imbalance (OFI)",
        explanation: "Measures whether buyers or sellers are more active. Positive OFI means more buying pressure, negative means more selling pressure. The absolute value (|OFI|) shows how one-sided the trading is, regardless of direction.",
        plainLanguage: "Think of it as a scale: which side is heavier - buyers or sellers?"
    },
    adv: {
        term: "Average Daily Volume (ADV)",
        explanation: "The average amount of shares or money traded per day over the last 20 trading days. Higher ADV means more liquidity and easier to trade large amounts without moving the price.",
        plainLanguage: "How much of this stock trades on a typical day"
    },
    hhi: {
        term: "Herfindahl-Hirschman Index (HHI)",
        explanation: "Measures how concentrated trading is across different times of day. 0 = perfectly spread out, 1 = all trading happens at one time. Values above 0.25 indicate high concentration.",
        plainLanguage: "Are trades spread evenly through the day, or do they bunch up at certain times?"
    },
    spread: {
        term: "Bid-Ask Spread",
        explanation: "The difference between the highest price buyers are willing to pay (bid) and the lowest price sellers will accept (ask). Lower spreads mean lower trading costs.",
        plainLanguage: "The gap between what buyers offer and sellers ask - your immediate trading cost"
    },
    granger: {
        term: "Granger Causality",
        explanation: "A statistical test that checks if one time series can predict another. If OFI 'Granger-causes' price, it means order flow imbalance helps predict future price movements.",
        plainLanguage: "Does knowing the order imbalance help us guess where the price is heading?"
    },
    regime: {
        term: "Volatility Regime",
        explanation: "Different market states characterized by volatility levels. Markets can be calm (low vol), normal (medium vol), or turbulent (high vol). The model identifies which state we're in and how likely we are to switch.",
        plainLanguage: "Is the market currently calm, normal, or chaotic?"
    },
    kyle: {
        term: "Kyle's Lambda",
        explanation: "Measures how much the price moves when you trade. Higher lambda means your trades have more price impact - the market is less liquid.",
        plainLanguage: "How much does the price move when you buy or sell?"
    },
    amihud: {
        term: "Amihud Ratio",
        explanation: "Measures price impact per dollar traded. Lower values indicate better liquidity. It's calculated as the average of (|return| / dollar volume) over a period.",
        plainLanguage: "How much does the price bounce around relative to how much is being traded"
    },
    idiosyncratic: {
        term: "Idiosyncratic Risk",
        explanation: "Price movements specific to this company, not explained by the overall market or sector. High idiosyncratic share means the stock marches to its own drum.",
        plainLanguage: "How much of the price movement is just about this company, not the market"
    }
};
