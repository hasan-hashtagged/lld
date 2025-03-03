# This is the initialization file of a custom package created for learning.
# This package will have subpackages and will have their initialization files.

from a1.foo import bar
import a2.bar as spam
from a3 import *
from a4.runner import run

if __name__ == '__main__':
    bar()
    spam.baz()
    narrate.abc()
    read.cde()
    speak.fgh()
    run()
