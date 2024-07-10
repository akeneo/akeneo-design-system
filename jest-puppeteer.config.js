module.exports = {
  launch: {
    dumpio: true,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  server: {
    command: 'npx http-server storybook-static -p 6006',
    launchTimeout: 90000
  },
}
