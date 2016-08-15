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

Example
-------
This is a test of what the sentinel app.js will do:

```sh
$ app.js superblock create blockheight=28224 payment=yLipDagwb1gM15RaUq3hpcaTxzDsFsSy9a=100
Printing sentence to sentinel.. 
Create superblock
on event blockheight 28224 
sending to address yLipDagwb1gM15RaUq3hpcaTxzDsFsSy9a
quantity of 10 dash
Success!
```

Author
=====
Alexandro - jza@apache.org
