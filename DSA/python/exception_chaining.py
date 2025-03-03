def func():
    raise NameError

def foo():
    raise ValueError

def runner():
    try:
       # func()
        foo()
    #except NameError as exc:
        #raise RuntimeError('I am being raised!!') from exc
    except ValueError as exc:
        raise NameError from None
    finally:
        print('I am finally for cleanup purpose')

runner()
