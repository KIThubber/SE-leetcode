# def A2Loesung(a):
#     return a + 273.15
from Aufgabe2 import Loesung

def test_A2_1():
    assert round(Loesung(-100),2) == 173.15

def test_A2_2():
    assert round(Loesung(0),2) == 273.15