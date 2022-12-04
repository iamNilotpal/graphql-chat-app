import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const someTimeAge = (time: string | number | dayjs.Dayjs | Date) =>
  dayjs(time).fromNow(true);
