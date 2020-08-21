## gcc
Compile unsafe code:
```
gcc bof.c -o bof -fno-stack-protector -w
```

## gef

Install gef: https://gef.readthedocs.io/

### Commands
* `checksec`
* `r <<< python3 -c 'print("\xef\xbe\xad\xde")'`
* `pattern create 32`
* `pattern search 0x6161616161616167`
* `pattern search $rbp`
