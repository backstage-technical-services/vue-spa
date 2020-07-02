module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  all: true,
  extension: [
    '.ts',
    '.vue'
  ],
  include: [
    'src/**/*.{ts,vue}'
  ],
  exclude: [
    'src/shims-*.d.ts',
    'src/config/**',
    'src/data/**',
    'src/types/**'
  ],
  reporter: [
    'text',
    'lcov',
    'json'
  ],
  'report-dir': 'coverage/e2e'
}
