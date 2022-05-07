#def Loesung(a,b,c):
#    return a*b*c

from Aufgabe1 import Loesung

def test_A1_1():
    assert Loesung(1,2,3) == 6

def test_A1_2():
    assert Loesung(0,2,3) == 0