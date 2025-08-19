export const formatDate = (iso) => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    const MMM = d.toLocaleString("en-US", { month: "short" }).toUpperCase(); // JAN
    const DD = d.getDate(); // 25
    const YYYY = d.getFullYear(); // 2025
    return `${MMM} ${DD}, ${YYYY}`;
};
