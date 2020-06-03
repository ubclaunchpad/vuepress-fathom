
const path = require('path');

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context;
    const siteID = options.siteID || siteConfig.siteID;
    const fathomURL = options.fathomURL || siteConfig.fathomURL;
    const domains = options.domains || siteConfig.domains;

    const FATHOM_ID = siteID || false;
    const FATHOM_URL = fathomURL || undefined;
    const FATHOM_DOMAINS = domains ? domains.join(',') : undefined;
    return { FATHOM_ID, FATHOM_URL, FATHOM_DOMAINS };
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
