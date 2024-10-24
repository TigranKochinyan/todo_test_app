export const generateId = () => {
  return `${Math.random().toString(36).slice(2)}_${Math.random().toString(36).slice(2)}`;
};
