const {join} = require('path')
exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "11.0",
        "deviceName": "Teste Android 10",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './test/app/android/android-NativeDemoapp.apk'),
        "appWaitActivity": 'com.wdiodemoapp.MainActivity'
    }]
}