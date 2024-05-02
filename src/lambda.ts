export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda! v1.0"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return response;
};
