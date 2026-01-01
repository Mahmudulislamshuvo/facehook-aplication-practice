export function getTimeFromNow(dateString) {
  const diff = Date.now() - new Date(dateString).getTime();

  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m`;

  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;

  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d`;

  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo`;

  return `${Math.floor(d / 365)}y`;
}
