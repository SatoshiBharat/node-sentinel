NodeJS interface for sentinel
=============================

NodeJS interface to interface with the sentinel script. 
The node's app.js is supposed to take the arguments and 
pass them to the python script for processing. 

The script will have functions for each of the sentinel 
methods and command line interfaces to take the values. 

Once the values are give, it will write to a childprocess
the sentinel sentence for processing.

It wil take the result and pass it to the commandline.

Sentinel methods
================
The sentinel project is based of a command-line interface
script in python which process the following arguments:
* superblock - Schedule payments to addresses on a specific date or blockheight
* crontab - Prepare events
* voting - Vote action on the dash network
* proposal - Create a proposal to the dashwhale.org website

Example
-------
This is a test of what the sentinel app.js will do:

```bash
$ app.js superblock create --block_height 28224 --payment yLipDagwb1gM15RaUq3hpcaTxzDsFsSy9 --amount 100
Printing sentence to sentinel.. 
Create superblock
on event blockheight 28224 
sending to address yLipDagwb1gM15RaUq3hpcaTxzDsFsSy9a
quantity of 10 dash
Success!
```

License
-------
The code is released under the MIT License


Author
=====
Alexandro - jza@apache.org
