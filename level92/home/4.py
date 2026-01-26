def sort_dict(d):
    items = list(d.items())
    for i in range(len(items)):
        for x in range(i+1,len(items)):
            if items[i][1] < items[x][1]:
                items[i],items[x] = items[x],items[i]
    return items
                
        