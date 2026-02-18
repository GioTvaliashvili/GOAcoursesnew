def get_first_python(users):
    for i in users:
        if i["language"] == "Python":
            return f'{i["first_name"]}, {i["country"]}'
        
    return "There will be no Python developers"