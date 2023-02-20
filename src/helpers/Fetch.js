export const getInfo = async () => {
  const url = `https://api.adviceslip.com/advice`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
