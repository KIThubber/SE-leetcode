def A1Loesung(a,b,c):
    return a*b*c

def test_A1_1():
    assert A1Loesung(1,2,3) == 6

def test_A1_2():
    assert A1Loesung(0,2,3) == 0