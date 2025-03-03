def runner():
    try:
        i = int(input())
    except ValueError:
        print("Hello")
    class B(Exception):
        pass
    class C(B):
        pass
    class D(C):
        pass

    for cls in [B, C, D]:
        try:
            raise cls()
        except D:
            print('D is printed as it matches the instance of same class')
        except B:
            print('B is printed as it matches the instance of same class or the class is derived from B')
        except C:
            print('Never executed')

    try:
        j = int(input("Enter a number:"))
    except ValueError:
        print("Hiya")
    else:
        print("Code that needs no protection from try (only on successful try)")

    try:
        raise NameError('Heyyy')
    # shouldn't have suppressed me
    except NameError:
        raise

runner()
