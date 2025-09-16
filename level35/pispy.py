def average(numbers):
    return sum(numbers) / len(numbers) if numbers else 0


numbers = [5, 10, 15, 20]
print(average(numbers)) 

empty_list = []
print(average(empty_list)) 
