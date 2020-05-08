module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
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
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  coverageReporters: ['text']
}
