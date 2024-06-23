
export const BASEURL = process.env.BASEURL;

export const todayDate = new Date();

export const isOutdated = (day) => {
    todayDate.setHours(0, 0, 0, 0);
    return day < todayDate;
};
