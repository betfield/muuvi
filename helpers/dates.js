import moment from 'moment';

export function getHeaderDate(dateStr) {
    return moment(dateStr).format("DD.MM.YYYY @ HH:mm");
};