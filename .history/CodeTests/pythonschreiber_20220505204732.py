fname = 'Aufgabe1.py'
inputcode = "def inc(x):\n    return x + 1"
testcode = "def test_answer1():\n    assert inc(3) == 4"

with open(fname, 'w') as f:
    f.write('{}'.format(inputcode))
    f.write('\n{}'.format(testcode))

exec("Aufgabe1.py")