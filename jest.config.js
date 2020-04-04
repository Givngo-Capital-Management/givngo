module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@typeDefs(.*)$': '<rootDir>/src/types$1',
    '^@generated(.*)$': '<rootDir>/src/generated$1',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  clearMocks: true,
};
