// node_glue.js
// Renamed to app.js
// Initializae the python script mockuppython.py
// added some parameters and values
// use the yargs module
// catch it's ouput and print it back

var argv = require('yargs')
		   .usage('Usage $0 <command> [options]')
		   .command('superblock', 'Create a payment to a superblock')
		   // Superblock options
		   .example('superblock', '$0 superblock --create --event_block_height <block_height> --payment <address> --amount <quantity>\n')
		   .command('vote', 'Generate a vote')
		   .nargs('create', 1)
		   .describe('create', 'Specify if the block aims to a new block')
		   .nargs('event_block_height', 2)
		   .describe('event_block_height', 'Set the number of block to target')
		   .nargs('payment', 3)
		   .describe('payment', 'Specify target address of the payment')
		   .nargs('amount', 4)
		   .describe('amount', 'Set quantity of DASH to be payed')
		   // Vote options
		   .example('vote', '$0 vote --times 22 --type funding --outcome yes\n')
		   .nargs('times', 5)
		   .describe('times', 'how many votes to cast')
		   .nargs('type', 6)
		   .describe('type', 'type of vote to cast')
		   .nargs('outcome', 7)
		   .describe('outcome', 'The value of the vote')
		   .command('proposal', 'Create a  proposal on the DashCircle website')
		   // Proposal options
		   .example('proposal', '--create --proposal_name sb-test --description_url www.dashwhale.org/p/sb-test --start_date 2016/8/1 --end_date 2017/1/1 \n--payment_address ydE7B1A7htNwSTvvER6xBdgpKZqNDbbEhP --payment_amount 23\n')
		   .nargs('create', 8)
		   .describe('create', 'Specify if the proposal is new')
		   .nargs('proposal_name', 9)
		   .describe('proposal_name', 'Set the name of the porposal')
		   .nargs('description_url', 10)
		   .describe('create', 'Description URL to submit')
		   .nargs('start_date', 11)
		   .describe('create', 'Set the start date of the proposal')
		   .nargs('end_date', 12)
		   .describe('create', 'Set the ending date of the proposal')
		   .nargs('payment_address', 13)
		   .describe('create', 'Set the payment address')
		   .nargs('amounts', 14)
		   .describe('create', 'Set the ammount to be received')
		   .help()
		   .epilog('Copyright DASH 2016')
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
} else if(argv._ == 'json') {
	// load json file 
	getFile(argv.json);
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

// Load fs module to get file access

var fs = require('fs');

function getFile(json_file) {
	// get json_file which would be a file embedding
	// the objects with the parameters
	fs.readFile( __dirname + json_file, function (err, data) {
		if (err) {
			throw err;
		}
		//get the file
		console.log(data.toString());
		});
}
