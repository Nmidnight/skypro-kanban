export const TOPIC_COLORS = {
    "Web Design": { bg: "#ffe4c2", text: "#ff6d00" },
    Research: { bg: "#b4fdd1", text: "#06b16e" },
    Copywriting: { bg: "#e9d4ff", text: "#9a48f1" },
};

export const DEFAULT_TOPIC_COLOR = { bg: "#94a6be", text: "#ffffff" };

export function getTopicColors(topic) {
    return TOPIC_COLORS[topic] ?? DEFAULT_TOPIC_COLOR;
}
