var cheerio = require('cheerio');

/**
 * Tries to get the AMP link from three sources: the `<link rel="amphtml">`
 *
 * @param html
 * @returns {string}
 */
function getAMPLink(html) {
  var $ = cheerio.load(html);

  var amplink = $('link[rel="amphtml"]').attr('href');
  return amplink;
}

module.exports = {
  getAMPLink: getAMPLink
};
