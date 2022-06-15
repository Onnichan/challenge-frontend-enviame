export const formateDate = (date) => {
    // const options = { year: 'numeric', day: 'numeric', month: 'numeric'}
    const newDate = new Date(date);
    const formatted = `${newDate.getDay()}-${
        newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    return formatted;
};
