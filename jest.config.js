module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  roots: [
    'tests/unit'
  ],
  reporters: [
    'default', [
      'jest-junit', {
        suiteName: 'Unit Tests',
        outputDirectory: 'tests/reports',
        outputName: 'unit-results.xml',
        uniqueOutputName: 'false'
      }
    ]
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,vue}', '!**/node_modules/**'],
  coverageReporters: ['text', 'lcov', 'json'],
  coverageDirectory: 'coverage/unit'
}
