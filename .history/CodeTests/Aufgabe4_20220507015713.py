def Loesung(a):
    b = 0
    for x in a:
        b = b + a[x-1]   
    return b