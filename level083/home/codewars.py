def nth_smallest(arr, pos):
    return sorted(arr)[pos-1]
#///////////////////////////////
def calculator(txt):
    a, op, b = txt.split()
    a, b = len(a), len(b)
    return '.' * eval(f'{a} {op} {b}')
#///////////////////////////////
def get_middle(s):
    index, odd = divmod(len(s), 2)
    return s[index] if odd else s[index - 1:index + 1]
#///////////////////////////////
def vowel_indices(word):
    return [i for i,x in enumerate(word,1) if x.lower() in 'aeiouy']
#///////////////////////////////
CRITERIA = (str.islower, str.isupper, str.isdigit)

def password(s):
    return len(s)>7 and all( any(map(f,s)) for f in CRITERIA)
#///////////////////////////////
def bumps(road):
    return "Woohoo!" if road.count("n") <= 15 else "Car Dead"
#///////////////////////////////
def freq_seq(s, sep):
    return sep.join([str(s.count(i)) for i in s])
#///////////////////////////////
def find_longest(xs):
    return max(xs, key=lambda x: len(str(x)))
#///////////////////////////////
def vaporcode(s):
    return "  ".join(s.replace(" ", "").upper())
