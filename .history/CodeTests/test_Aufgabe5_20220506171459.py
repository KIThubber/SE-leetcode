def A5Loesung(a,b):
    if(a%b != 0):
        return False
    else:
        return False



def test_A5_1():
      assert A5Loesung(4,3) == False



def test_A5_2():
      assert A5Loesung(20,5) == True

def test_A5_3():
    assert A5Loesung(-2,-2) == True