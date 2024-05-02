export const handler = async (event: any) => {
  try {
    const response: any = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda! v1.0"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    return response;
  } catch (error) {
    console.error(error); // Log the error to CloudWatch
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
};
