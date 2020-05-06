
import path from 'path';

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context;
    const siteID = options.siteID || siteConfig.siteID;
    const fathomURL = options.fathomURL || siteConfig.fathomURL;
    const FATHOM_ID = siteID || false;
    const FATHOM_URL = fathomURL || undefined;
    return { FATHOM_ID, FATHOM_URL };
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
