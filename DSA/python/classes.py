# This is an example on how to use class, class object and its instances.

class MyClass:
    # class variable
    a = 1234

    # method
    def func():
        print('I am method of a function')

class Tester:
    def __init__(self, a, b):
        # data attributes
        self.a = a
        self.b = b

    def foo(self):
        print('I am a method')


def runner():
    print(MyClass.a)
    print(MyClass.func)
    x = Tester('Hasan', 'Jamil')
    print('#' * 20, 'Printing data attributes', '#' * 20)
    print('a:', x.a, 'b:', x.b)
    print(x.foo)
    inst = MyClass()
    print('Class Variable:,', inst.a)
    inst.a = 2345
    print('Instance variable priortized:', inst.a)

runner()
