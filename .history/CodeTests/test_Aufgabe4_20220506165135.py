def A3Loesung(x):
    for(i in x):
        a = x[i]   
    return a

def test_A3_1():
    x = [0] * 5
    x[1] =1
    x[2] = 2
    x[3] = 3
    x[4] = 4
    x[5] = 5

    assert A3Loesung(x) == 

def test_A3_2():
    assert A3Loesung(9,3) == True

def test_A3_3():
    assert A3Loesung(16,-4) == True


