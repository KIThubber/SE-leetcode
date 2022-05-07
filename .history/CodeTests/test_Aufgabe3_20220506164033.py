from operator import truediv
from pickle import FALSE, TRUE


def A3Loesung(a,b):
    if(b*b==a):
        return TRUE
    else:
        return FALSE

def test_A3_1():
    assert A3Loesung(5,3) == FALSE

def test_A3_2():
    assert A3Loesung(9,3) == TRUE

def test_A3_3():
    assert(16,-4) == TRUE