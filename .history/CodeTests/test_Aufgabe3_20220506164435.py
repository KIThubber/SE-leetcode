def A3Loesung(a,b):
    if((b)^2==a):
        return True
    else:
        return False

def test_A3_1():
    assert A3Loesung(5,3) == False

def test_A3_2():
    assert A3Loesung(9,3) == True

def test_A3_3():
    assert(16,-4) == True


print(-4*-4==16)