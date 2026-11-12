export const parseDate = (value) => {
    const match = typeof value === "string" && /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return new Date(value);

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const date = new Date(year, month - 1, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        return new Date(Number.NaN);
    }

    return date;
};

export const formatDate = (iso) => {
    const d = parseDate(iso);
    if (Number.isNaN(d.getTime())) return iso;
    const MMM = d.toLocaleString("en-US", { month: "short" }).toUpperCase(); // JAN
    const DD = d.getDate(); // 25
    const YYYY = d.getFullYear(); // 2025
    return `${MMM} ${DD}, ${YYYY}`;
};
