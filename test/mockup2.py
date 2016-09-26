## Python echo function 
## through arguments

import sys, getopt, os

# Get the script and arguments

def main():
    arg1 = 'create'
    arg2 = 'event_block_height'
    arg3 = 'payment'
    arg4 = 'event_date'
    arg5 = 'superblock'

    try:
        opts, args = getopt.getopt(sys.argv[1:], 'pdb', [arg5, arg1, arg2, arg3, arg4])
    except getopt.GetoptError as err:
        print(str(err))
        sys.exit(2)
    if len(opts) == 0:
        # insert function for default
        print('This script needs arguments')
    else:
        param=[]
        for options, argv in opts:
            if len(sys.argv)>3:
                #print('Everything went well')
                param.append(options)
            elif len(sys.argv)<2:
                print('Needs one more arguments')

        if param != 0:
            print('Everything went well')
        else:
            pass

if __name__ == "__main__":
    main()

