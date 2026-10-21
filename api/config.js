const BOT = require('../bot.config');

module.exports = async function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const credit = `Created with Love &amp; AI by <a href="https://tall-e.ai" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;text-underline-offset:2px">Tall-e</a> &copy; ${new Date().getFullYear()}`;

  return res.status(200).json({
    name:     BOT.name,
    tagline:  BOT.tagline,
    avatar:   BOT.avatar   || '',
    starters: BOT.starters || [],
    credit,
  });
};
