export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda!"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return response;
};
