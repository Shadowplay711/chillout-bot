const { Client } = require("discord.js");
const { token } = require("./config");

const client = new Client();

require("./core/loadWidgetListeners")(client);

client.login(token).catch((error) => {
  console.error(error);
  process.exit(1);
});


.get('/times', (req, res) => res.send(showTimes()))
showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}
