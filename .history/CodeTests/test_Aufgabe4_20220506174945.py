# def A4Loesung(a):
#     b = 0
#     for x in a:
#         b = b + a[x-1]   
#     return b
from Aufgabe4 import Loesung


def test_A4_1():
      assert Loesung([1,2,3,4,5]) == 15



def test_A4_2():
      assert Loesung([0]) == 0
