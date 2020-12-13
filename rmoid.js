module.exports = () => {
  const timestamp = Math.round(new Date().getTime() / 1000).toString(16);
  const randomHexString = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");

  return `${timestamp}${randomHexString}`;
};
