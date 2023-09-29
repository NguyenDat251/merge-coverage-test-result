export default {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  coverageDirectory: "unit-out/coverage",
  collectCoverageFrom: [
    "src/*.{js,jsx,ts,tsx}",
    "src/*.{js,jsx,ts,tsx}",
  ],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        includeConsoleLog: false,
        includeFailureMsg: true,
        outputPath: "unit-out/jest-report.html",
      },
    ],
  ],
};
