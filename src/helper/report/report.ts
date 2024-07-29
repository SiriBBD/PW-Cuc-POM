const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Fusion Software Test report",
    displayDuration: true,
    metadata: {
        browser: {
            name: process.env.npm_config_browser ||"chrome"
        },
        device: process.env.COMPUTERNAME,
        platform: {
            name: process.env.OS,
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Fusion Software Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});