# This file is to leran about input and output in python 
from math import pi
import json

def file_operations():
    with open('sample.txt') as f:
        read_data = f.read()
        print(read_data)
    print(f.closed)
    print('#' * 20, 'File methods', '#' * 20)
    with open('sample.txt') as f1:
        for line in f1:
            print(line)
    f1 = open('sample.txt')
    f2 = open('output.txt', 'w')
    a = list(f1)
    for val in a:
    	f2.write(val)
    f1.close()
    f2.close()
    print('#' * 20, 'Structured data as JSON', '#' * 20)
    x = [1, 'Hasan', 'list']
    print(json.dumps(x))
    f3 = open('sample.txt', 'a')
    print(json.dump(x, f3))
    f3.close()

def foo():
    print("#" * 20, "Format Strings", "#" * 20)
    res = 'Apple Banana'
    print(f'Fruits {res}')
    yes = 23_435_875
    total = 47_000_350
    print('{:-8} yes votes, total: {:2.2%}'.format(yes, yes/total))
    print(f'Pi to 3 round figures: {pi:.3f}')
    contacts = { 'Hasan': 12345, 'Himanshu': 6789, 'Sharad': 123456 }
    for name, phone in contacts.items():
        print(f'{name:10} ==> {phone:10d}')   
    print("#" * 20, 'Modifiers(!a, !s, !r)', "#" * 20)
    print(f'Life is full of {res!r}')
    # print('#' * 20, 'Specifiers(=)', '#' * 20)
    # print(f'Testing {yes=} {total=} {res=}')
    print('#' * 20, 'str.format()', '#' * 20)
    print('{} and {}'.format('Jack', 'Jill'))
    print('{1} and {0}'.format('Jack', 'Jill'))
    print('#' * 20, 'Positional and keyword argument', '#' * 20)
    print('{1} and {0} went up the {place}'.format('Jack', 'Jill', place='hill'))
    print('#' * 20, 'Reference by name', '#' * 20)
    print('Hasan: {0[Hasan]:d}, Sharad: {0[Sharad]:d}'.format(contacts))
    print('#' * 20, 'Manual string format', '#' * 20)
    x = 12
    print(repr(x).rjust(2), repr(x*x).rjust(3), repr(x*x*x).rjust(4))

    print('#' * 20, 'File operations', '#' * 20)
    file_operations()

foo()
