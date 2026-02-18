


name = "Gio"
print(type(name))

fruits = ["apple", "banana", "orange"]
print(fruits[1])

student = {
    "name": "Gio",
    "age": 18,
    "grade": "A"
}
print(student["grade"])

colors = ("red", "green", "blue")


set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1 | set2)  
print(set1 & set2) 




a = float(input("Enter first number: "))
b = float(input("Enter second number: "))

print("Sum:", a + b)
print("Difference:", a - b)
print("Product:", a * b)
print("Division:", a / b)

print(5 ** 2)
print(5 ** 3)

print(17 // 5)
print(17 % 5)



x = 10
x += 5
x *= 2
print(x)

y = 8
y += 4
y *= 2
print(y)



a = 10
b = 20

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)

n = float(input("Enter a number: "))

if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")



age = int(input("Enter age: "))
if age > 18 and age < 60:
    print("Adult")

n = int(input("Enter number: "))
if (10 <= n <= 20) or n == 50:
    print("Valid")
else:
    print("Not valid")