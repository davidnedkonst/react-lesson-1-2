import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { formatTime, formatDuration } from '../../utils/index';
import { iconSize } from '../../constants/index';
import { EventName, Title, Info, Chip} from './EventCard.styled';

function EventCard({ name, location, speaker, type, start, end }) {

    const formattedStart = formatTime(start);
    const formattedDuration = formatDuration(start, end);

    return (
        <Event>
            <EventName>{name}</EventName>
            <Info>
                {/* <FaMapMarkerAlt className={css.icon} size={iconSize.sm} /> */}
                {location}
            </Info>
            <Info>
                {/* <FaUserAlt className={css.icon} size={iconSize.sm} /> */}
                {speaker}
            </Info>
            <Info>
                {/* <FaCalendarAlt className={css.icon} size={iconSize.sm} /> */}
                {formattedStart}
            </Info>
            <Info>
                {/* <FaClock className={icon} size={iconSize.sm} /> */}
                {formattedDuration}
            </Info>
            <Chip>{type}</Chip>
        </Event>
    )
};

export default EventCard;

EventCard.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
};