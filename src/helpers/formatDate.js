import { pt } from 'date-fns/locale';
import { formatRelative, parseISO } from 'date-fns';

export default function formatDate(checkins) {
  return checkins.map(checkin => ({
    ...checkin,
    formattedDate: formatRelative(parseISO(checkin.created_at), new Date(), {
      addSuffix: true,
      locale: pt,
    }),
  }));
}
