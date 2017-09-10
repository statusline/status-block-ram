module.exports ={
	render: function(block){
		return new Promise((resolve, reject) => {
			var exec = require('child_process').exec;

			exec("free", function(err, stdout, stderr) {
				stdout = stdout.split("\n")[1].split(" ");

				stdout = stdout.filter((part) => part != "");

				stdout = Math.round(stdout[2] / stdout[1] * 100);

				resolve({
					text: "   "+stdout+"% "
				});
			});
		});
	},
}

