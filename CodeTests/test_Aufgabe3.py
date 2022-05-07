# def A3Loesung(a,b):
#     if(b*b==a):
#         return True
#     else:
#         return False
from Aufgabe3 import Loesung

def test_A3_1():
    assert Loesung(5,3) == False

def test_A3_2():
    assert Loesung(9,3) == True

def test_A3_3():
    assert Loesung(1,-1) == True



