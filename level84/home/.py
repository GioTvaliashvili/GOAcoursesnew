# -------------------------------
# 1. CLASS: Book
# -------------------------------

class Book:
    def __init__(self, title, author, pages, price):
        self.title = title
        self.author = author
        self.pages = pages
        self.price = price

    def display_info(self):
        print(f"📘 Book Title: {self.title}")
        print(f"✍️ Author: {self.author}")
        print(f"📄 Pages: {self.pages}")
        print(f"💰 Price: {self.price}₾")


# ობიექტის შექმნა
book1 = Book("Python Basics", "John Smith", 250, 39.99)
book1.display_info()


# -------------------------------
# 2. CLASS: Calculator
# -------------------------------

class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            return "Error: Division by zero!"
        return a / b



calc = Calculator()

print("Calculator Results:")
print("Add:", calc.add(10, 5))
print("Subtract:", calc.subtract(10, 5))
print("Multiply:", calc.multiply(10, 5))
print("Divide:", calc.divide(10, 5))



class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, I am {self.name} and I am {self.age} years old.")


class Employee(Person):
    def __init__(self, name, age, salary):
        super().__init__(name, age)
        self.salary = salary

    def work(self):
        print(f"I work as an employee and my salary is {self.salary}₾.")



employee1 = Employee("Gio", 18, 2500)

print("\nEmployee Info:")
employee1.greet()
employee1.work()





class Shape:
    def area(self):
        pass


class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height



rect = Rectangle(10, 6)
print("\nRectangle area:", rect.area())
