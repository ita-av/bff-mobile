export default {
  port: 3000,
  rest: {
    baseUrl: "http://localhost:8000",
    timeout: parseInt("60000"),
  },
  grpc: {
    host: "localhost",
    port: "50051",
  },
};
