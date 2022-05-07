# def A5Loesung(a,b):
#     if(a%b != 0):
#         return False
#     else:
#         return True
from Aufgabe5 import Loesung


def test_A5_1():
      assert Loesung(4,3) == False



def test_A5_2():
      assert Loesung(20,5) == True

def test_A5_3():
    assert Loesung(-2,-2) == True