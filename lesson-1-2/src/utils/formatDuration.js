import { formatDistanceStrict } from 'date-fns';

export function formatDuration(start, end) {
    return (formatDistanceStrict(Date.parse(start), Date.parse(end)));
}