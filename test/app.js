// node_glue.js
// Renamed to app.js
// Initializae the python script mockuppython.py
// added some parameters and values
// use the yargs module
// catch it's ouput and print it back

var argv = require('yargs')
		   .usage('Usage $0 <command> [options]')
		   .command('superblock', 'Create a payment to a superblock')
		   .example('$0 superblock --create --event_block_height <block_height> --payment <address> --amount <quantity>\n')
		   .command('vote', 'Generate a vote')
		   .example('$0 vote --times 22 --type funding --outcome yes\n')
		   .command('proposal', 'Createa  proposal on the DashCircle website')
		   .example('--create --proposal_name sb-test --description_url www.dashwhale.org/p/sb-test --start_date 2016/8/1 --end_date 2017/1/1 \n--payment_address ydE7B1A7htNwSTvvER6xBdgpKZqNDbbEhP --payment_amount 23\n')
		   .help()
		   .argv;

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
	var attributes = ('(%s, %s, %s, %s, %s, %d)', argv.proposal_name, argv.description_url, argv.start_date, end_date, argv.payment_address, argv.payment_ammount); 
		putChild(argv);	
} else if(argv.h != null) {
	console.log('This is a script to be able to work with sentinel cli,\nit should be added with the right parameters and values. \nPlease reffer to the documentation at the dash.org project.\n'+argv.usage+'\n'+argv.example);
} else {
	console.log('Your action parameter "'+argv._+'" is invalid or still not documented');
}

function putChild(argv) {
		var python_file ='mockuppython.py';
		// require spawn
		var spawn = require('child_process').spawn,

		// array with all the properties of the object
		keys = Object.keys(argv); 
		// gets off the first element of the object
		primary = keys.shift(); 
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
		
		py = spawn('python', args);

		py.stdout.on('data', (data) => {
			console.log(`${data}`);
		});

		py.stdout.on('end', function() {
			console.log(dataString);
		});

}
