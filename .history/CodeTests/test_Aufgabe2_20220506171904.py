def A2Loesung(a):
    return a + 273.15

def test_A2_1():
    assert A2Loesung(-22) == 251.15

def test_A2_2():
    assert A2Loesung(0) == 273.15