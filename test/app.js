// node_glue.js 
// initialize the python script
// and catch its output



if (process.argv.length >=3) {
	var param = process.argv[2];
	if (param == 'superblock') {
		var spawn = require('child_process').spawn,
		//
		// Input should be: python moackuppython.py --create ....
		//
		py = spawn('python', ['mockuppython.py', 'superblock', '--create', '--event_block_height', '--payment']),
		dataString = '';

		py.stdout.on('data', (data) => {
			console.log(`${data}`);
		});

		/* Once the stream is done (on 'end') we want to log 
		 * the received data to the console */
		py.stdout.on('end', function() {
			console.log(dataString);
		});
	} else if (param == 'vote') {
		console.log(param+' still not implemented');
	} else if (param == 'crontab') {
		console.log(param+' still not implemented');
	} else if (param == 'proposal') {
		console.log(param+' still not implemented');
	};
} else {
	console.log('You need some param');
}

/*var argv = require('yargs').argv;
var valid_arg=['superblock', 'crontab', 'vote', 'proposal']

if(process.argv[1] != foreach(valid_arg)) {
	console.log('Parameter not valid')
}

function getparm() {
	if(argv > 3 && argv < 5) {
			console.log('Need more parameters')
		//add more validations
		}else {
			var param=process.argv;
			param.Foreach(${index})=>{
				index.split('=');
			}
		}
	}
	return param
}

function superblock(getparm()) {

}

function vote(getparm()) {

}

function proposal(getparm()) {

}

function crontab(getparm()) {

}*/
