const camelCaseToSentenceCase = (value: string) => {
  const result = value.replace(/([A-Z])/g, ' $1');

  return capitalize(result.trim());
};

const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

const getStaticImage = (filename: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return require(`../static_images/${filename}`);
};

export {camelCaseToSentenceCase, getStaticImage};
