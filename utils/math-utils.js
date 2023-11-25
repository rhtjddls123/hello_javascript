export const rand = (start, end) => {
  return Math.floor((end - start + 1) * Math.random()) + start;
};
