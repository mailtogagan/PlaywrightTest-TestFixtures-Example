module.exports = {
  use: {
    // Browser options
    browserName: "chromium",
    launchOptions: {
      headless: false,
      channel: "chrome",
      executablePath: "c:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      // logger: {
      //   isEnabled: (name, severity) => name === 'browser',
      //   log: (name, severity, message, args) => console.log(`${name} ${message}`)
      // },
      //tracesDir: "trace-directory",
    },

    // Artifacts
    screenshot: "on",
    trace: "on",
    //video: "on",
  },

  // Reporter
  // reporter: [ ['junit', { outputFile: 'reports/results.xml' }] ]
};
