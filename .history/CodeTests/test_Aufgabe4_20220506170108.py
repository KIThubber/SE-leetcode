def A4Loesung(a):
    b = 0
    for x in a:
        b = b + a[x-1]   
    return b



def test_A4_1():
      assert A4Loesung([1,2,3,4,5]) == 15



