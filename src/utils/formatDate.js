export function parseYmd(ymd) {
    if (!ymd) return undefined;
    const [y, m, d] = ymd.split("-").map(Number);
    if (!y || !m || !d) return undefined;
    return new Date(y, m - 1, d);
}

export function toYmd(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

function parseToDate(input) {
    if (!input) return null;

    if (input instanceof Date) {
        return Number.isNaN(input.getTime()) ? null : input;
    }

    if (typeof input === "string" && /^\d{4}-\d{2}-\d{2}$/.test(input)) {
        const [y, m, d] = input.split("-").map(Number);
        return new Date(y, m - 1, d);
    }

    const date = new Date(input);
    return Number.isNaN(date.getTime()) ? null : date;
}

export function formatDateRu(input) {
    const date = parseToDate(input);
    if (!date) return "";

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();

    return `${dd}.${mm}.${yyyy}`;
}
