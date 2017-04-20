export const selectNotebooks = ({notebooks}) => {
  return Object.keys(notebooks).map(key => notebooks[key]);
};
