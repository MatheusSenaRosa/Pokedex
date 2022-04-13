export const formatName = (name: string): string => {
  return name[0].toUpperCase() + name.slice(1);
};

export const formatWeight = (weight: number): string => {
  return Math.round(weight * 0.1) + " KG";
};

export const formatHeight = (height: number): string => {
  return (height * 0.1).toFixed(2) + " M";
};

export const formatId = (id: number): string => {
  return id > 9 ? String(id) : `0${id}`;
};
