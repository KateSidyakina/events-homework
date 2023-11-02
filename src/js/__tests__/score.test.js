import Score from "../Score";

test("Score test", () => {
  const score = new Score();
  const result = 0;

  expect(result).toBe(score.score);
});
