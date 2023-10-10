import { format } from 'date-fns';

export function formatTime(time) {
    return (format(Date.parse(time), "dd MMMM yyyy, HH:mm"));
}