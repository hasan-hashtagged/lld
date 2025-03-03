import sys
import mymodule

def tester():

    print(mymodule.__name__)
    mymodule.abc()
    print(mymodule.foo.__doc__)

    print('#' * 20, "Builtin module", '#' * 20)
    print(sys.builtin_module_names)

tester()

if __name__ == '__main__':
    s = """
This will be executed when run from commandline.
The __name__ is set to __main__ and thus this code-path is followed.
If imported by other module, __name__ would be testmodule, i.e. name of file."""
    print(s)
