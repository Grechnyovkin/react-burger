export const checkResponse = (response, message) => {
  if (!response.ok) {
    throw new Error(message);
  }
};
