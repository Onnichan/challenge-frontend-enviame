export const formateDate = (date) => {
    const newDate = new Date(date);
    const formatted = `${newDate.getDay()}-${
        newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    return formatted;
};
