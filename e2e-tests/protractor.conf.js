exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'features/*.js'
  ],

  capabilities: {
    'browserName': 'chrome',
//    'chromeOptions': {
//        'args': ['user-agent=Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5']
//    }
  },
  
  

  baseUrl: 'http://localhost:8383/GodHasAPlan/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
