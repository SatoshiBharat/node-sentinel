//dummy de argv
argv = {
	_ : "superblock",
	create : true,
	event_date : "2017/1/1",
	payments : "yLipDagwb1gM15RaUq3hpcaTxzDsFsSy9a=100"
};

keys = Object.keys(argv); //arreglo con todas las propiedades del objeto
primary = keys.shift(); //obtiene el primer elemento que debe ser el _ y lo remueve del arreglo
var arg = "";
var args = ['mockuppython.py',argv[primary]];
for (var i = 0; i < keys.length; i++) {
	arg = "--"+keys[i];
	if(argv[keys[i]] !== true){
		arg += "=\""+argv[keys[i]]+"\"";
		args.push(arg);
	}
}

var spawn = require('child_process').spawn,
py = spawn('python', args);
dataString = '';

		py.stdout.on('data', (data) => {
			console.log(`${data}`);
		});

		/* Once the stream is done (on 'end') we want to log 
		 * the received data to the console */
		py.stdout.on('end', function() {
			console.log(dataString);
		});
