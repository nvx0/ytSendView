// Coded by cloud3
// Needs Windows to run
// Chrome driver will install automaticly after module installation
// Free to use

const v = require('youtube-view-bot');

function w(t) {
  return new Promise(resolve => setTimeout(resolve, t));
}

// Command handler from discordjs.guide, that most bot use

module.exports = {
	name: 'yt',
	description: 'Youtube related stuff.',
	execute(msg, args) {
		if (!args[0]) {
		msg.channel.send("Missing argument! Available options: ``send-view``")
		return;
		}
 		if (args[0] == "send-view") {
			if (!args[1]) {
			msg.channel.send("Missing argument! You need tu input link to youtube video!")
			} else {
			const videolink = args[1]
			// Sometimes views are not added!
			msg.channel.send("Sedning.. | Waiting 30 seconds for response!")
			console.log("YT | Request to send view has been recived!")
			console.log(`Video link: ${videolink}`)
			if (v.watch_video(`${videolink}`,"30")) {
			msg.channel.send("View has been sent!")
			console.log(`YT | View has been sent succesfully to ${videolink}!`)
			} else {
			msg.channel.send("Can't send view! See console for more informations.")
			console.log(`YT | Can't send view to ${videolink}!`)
				}
			}
		}
	},
};

// End of command
