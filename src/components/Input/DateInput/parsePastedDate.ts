const pad = (value: number) => String(value).padStart(2, '0');

const parsePastedDate = (raw: string, withTime: boolean): string | null => {
  const isoMatch = /^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2}))?$/.exec(raw.trim());
  if (null === isoMatch) {
    return null;
  }

  const [year, month, day] = [Number(isoMatch[1]), Number(isoMatch[2]), Number(isoMatch[3])];
  const [hours, minutes] = [Number(isoMatch[4] ?? 0), Number(isoMatch[5] ?? 0)];

  if (hours > 23 || minutes > 59) {
    return null;
  }

  const check = new Date(year, month - 1, day, hours, minutes);
  if (check.getFullYear() !== year || check.getMonth() !== month - 1 || check.getDate() !== day) {
    return null;
  }

  const date = `${year}-${pad(month)}-${pad(day)}`;

  return withTime ? `${date}T${pad(hours)}:${pad(minutes)}` : date;
};

export {parsePastedDate};
