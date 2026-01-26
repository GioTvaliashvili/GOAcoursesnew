def user_contacts(data):
    tupple = {}
    for i in data:
        if len(i) == 2:
            tupple[i[0]] = i[1]
        else:
            tupple[i[0]] = None
    return tupple