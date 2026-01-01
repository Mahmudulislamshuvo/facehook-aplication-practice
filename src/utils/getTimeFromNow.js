export function getTimeFromNow(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const diff = Date.now() - date.getTime();

  const m = Math.floor(diff / 60000);
  if (m < 1) return "Just now";
  if (m < 60) return `${m}m`;

  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;

  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d`;

  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo`;

  return `${Math.floor(d / 365)}y`;
}
