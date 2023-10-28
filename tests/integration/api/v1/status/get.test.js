const baseUrl = "http://localhost:3000";

test("GET - /api/v1/status shold return 200", async () => {
  const response = await fetch(`${baseUrl}/api/v1/status`);
  expect(response.status).toBe(200);
});
