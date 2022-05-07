def A2Loesung(a):
    return a + 273.15

def test_A2_1():
    assert round(A2Loesung(-100)) == 173.15

def test_A2_2():
    assert round(A2Loesung(0)) == 273.15