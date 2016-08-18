var argv = require('yargs').argv;

// parameters: superblock --create --event_block_height="2824" --payments="yLibDawb1gM15RaUq3hpcaTxzDFs5y9" amount=100

if(argv._ == 'superblock') {
	if(argv.create != null) {
		putChild(argv);	
	}
} else if(argv._ == 'vote') {
	//execute function of parameters
	var attributes = ('(%d, %s, %s, %s %s)', argv.times, argv.type, argv.outcome, argv.hash, argv.name);
		putChild(argv);	

} else if(argv._ == 'crontab') {
	//execute function of parameters
	var attributes = ('(%d, %s, %s, %s %s)', argv.times, argv.type, argv.outcome, argv.hash, argv.name);
		putChild(argv);	
} else if(argv._ == 'proposal') {
	//execute function of parameters
	var attributes = ('(%s, %s, %s, %s, %s, %d)', argv.proposal_name, argv.description_url, argv.start_date, argv.end_date, argv.payment_address, argv.payment_ammount); 
		putChild(argv);	
} else {
	console.log('Your action parameter "'+argv._+'" is invalid or still not documented');
}

function putChild(argv) {
		// require spawn
		var python_file = 'mock3.py';
		var spawn = require('child_process').spawn,

		// array with all the properties of the object
		keys = Object.keys(argv); 
		// gets off the first element of the object
		primary = keys.shift(); 
		keys.pop();
		var arg = "";
		var args = [python_file,argv[primary]];
		for (var i = 0; i < keys.length; i++) {
			if(argv[keys[i]] !== false){
				arg = "--"+keys[i];
				if(argv[keys[i]] !== true){
					arg += "=\""+argv[keys[i]]+"\"";
					args.push(arg);
				}
			}
		}
		
		py = spawn('python', args),
		dataString='';

		py.stdout.on('data', (data) => {
			console.log(`${data}`);
		});

		py.stdout.on('end', function() {
			console.log(dataString);
		});

}
