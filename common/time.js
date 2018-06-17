export const getTimeStamp = () => {
  const now = new Date();
  return now.getTime();
}

export const getMinutes = () => {
  const now = new Date();
  return now.getMinutes();
}

export const getSeconds = () => {
  const now = new Date();
  return now.getSeconds();
}
