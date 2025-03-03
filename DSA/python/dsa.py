from collections import deque

def ds_dictionaries():
    print('#' * 20, 'DICTIONARIES(key/value) pairs', '#' * 20)
    a = {}
    print(a)
    b = dict([('a', 1), ('b', 2), ('c', 3)])
    print('#' * 20, 'Contents', '#' * 20)
    print(b)
    print('#' * 20, 'Keys', '#' * 20)
    print(list(b))
    print('#' * 20, 'Conditionals', '#' * 20)
    print ('a' in b)
    print('#' * 20, 'Initializing Dictionaries', '#' * 20)
    w = {'a': 1, 'b': 2}
    print(w)
    x = dict(ram=1, rom=2, cpu=3)
    print(x)
    print('#' * 20, 'Dictionary comprehension', '#' * 20)
    y = {x: x** 2 for x in range(1, 11)}
    print(y)
    print("#" * 20, 'Looping in dictionary using items()', '#' * 20)
    for k, v in y.items():
        print(k,':', v, end = ', ')

def ds_list():
    print('#' * 20, 'LISTS', '#' * 20)
    a = []
    for i in range(1, 11):
        a.append(i)
    print('After for loop:', a)
    b = [11, 12, 13, 14]
    print('#' * 20, 'Using extend', '#' * 20)
    a.extend(b)
    print(a)
    print('#' * 20, 'Inserting at ith index', '#' * 20)
    a.insert(11, 21)
    print(a)
    print('#' * 20, 'Removing 21 from a', '#' * 20)
    a.remove(21)
    print(a)
    print('#' * 20, 'Popping element at ith index', '#' * 20)
    a.pop(10)
    print(a)
    print('#' * 20, 'Index of elem in range', '#' * 20)
    print(a.index(10, 1, 12))
    print('#' * 20, 'Counting the occuerence of elem', '#' * 20)
    print(a.count(10))
    print('#' * 20, 'Sorting using sort()', '#' * 20)
    a.sort(reverse=True)
    print(a)
    print('#' * 20, 'Reversing a list', '#' * 20)
    a.reverse()
    print(a)
    print('#' * 20, 'Copy elements to list (shallow)', '#' * 20)
    b = a.copy()
    print(b)
    print('#' * 20, 'Clear a list', '#' * 20)
    b.clear()
    print('b =', b)
    print('#' * 20, 'List as Stack using append() and pop()', '#' * 20)
    print(a)
    print('#' * 20, 'Appending the element at last', '#' * 20)
    a.append(34)
    print(a)
    print('#' * 20, 'Popping out element', '#' * 20)
    print(a.pop())
    print('#' * 20, 'List as queue using deque', '#' * 20)
    queue = deque([1, 2, 3])
    print(queue)
    queue.append(4)
    print('#' * 20, 'Pushing element in queue', '#' * 20)
    print(queue)
    print('#' * 20, 'Dequeueing element FIFO', '#' * 20)
    print(queue.popleft())
    del a
    del queue
    print('#' * 20, 'LIST COMPREHENSIONS', '#' * 20)
    odd = [i for i in range(1, 11) if i % 2]
    print('#' * 20, 'Print the list generated', '#' * 20)
    print(odd)
    print('#' * 20, 'Nested list comprehension', '#' * 20)
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    print('Matrix:', matrix)
    transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
    print('Transpose:', transposed)

def ds_sets():
    print('#' * 20, 'Sets', '#' * 20)
    a = set()
    print('Empty set', a)
    Fruits = {'Apples', 'Bananas', 'Oranges', 'Apples'}
    print(Fruits)
    print('#' * 20, 'Conditional check using "in"', '#' * 20)
    print('Oranges' in Fruits)
    print('#' * 20, 'Sets comprehension', '#' * 20)
    b = {x for x in 'abcrakadabra' if x not in 'abcd'}
    print(b)

def ds_tuples():
    print('#' * 20, 'Tuples', '#' * 20)
    a = ()
    b = 'Hello',
    print('#' * 20, 'Creating tuples', '#' * 20)
    print('a =', a, 'b =', b)
    print('#' * 20, 'Sequence unpacking', '#' * 20)
    x = b
    print(x)
    c = ((1, 2, 3), (4, 5, 6))
    y, z = c
    print(y, z)

def data_structures():
    ds_list()
    ds_tuples()
    ds_sets()
    ds_dictionaries()

data_structures()
