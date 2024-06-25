export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "chore",
        "style",
        "refactor",
        "ci",
        "test",
        "revert",
        "perf",
        "vercel",
        "wip",
      ],
    ],
  },
};
