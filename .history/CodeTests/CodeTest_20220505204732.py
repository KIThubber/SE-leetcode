def inc(x):
    return x + 1

def test_answer1():
    assert inc(3) == 4
    
def test_answer2():
    assert inc(4) == 6    




a = """
"def inca(x):
    return x + 1
inca(4)
"""
eval(a)

