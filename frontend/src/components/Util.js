export const dateToString = (dateInMilliseconds) => {
  if(!dateInMilliseconds)
    return;
  const date = new Date(dateInMilliseconds);
  const year = date.getUTCFullYear();
  const month =  `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);
  const hour = `0${date.getUTCHours()}`.slice(-2);
  const minutes = `0${date.getUTCMinutes()}`.slice(-2);
  return `${day}-${month}-${year} ${hour}:${minutes}`;
};