module.exports = {
  extends: ["react-app", "react-app/jest"],
  plugins: ["import"],
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "^constants/.+",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/newline-after-import": [
      "warn",
      {
        count: 2,
      },
    ],
  },
  settings: {
    "import/internal-regex":
      "(^components)|(^constants/.+)|(^apps)|(^hooks)|(^lib)|(^modules)",
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
