import moment from 'moment';

export function getHeaderDate(dateStr) {
    return moment(dateStr).format("DD.MM.YYYY @ HH:mm");
};

export function getH2HDate(dateStr) {
    return moment(dateStr).format("DD MMM YY");
};