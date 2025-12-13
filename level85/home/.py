
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def drive(self):
        print(f"{self.brand} {self.model} is driving 🚗")



class Food:
    def __init__(self, name, calories):
        self.name = name
        self.calories = calories

    def eat(self):
        print(f"You ate {self.name} 🍽️ ({self.calories} calories)")



class Napoleon:
    def __init__(self, size, price):
        self.size = size
        self.price = price

    def describe(self):
        print(f"Napoleon cake size: {self.size}, price: {self.price}₾ 🎂")



class Perfume:
    def __init__(self, brand, scent):
        self.brand = brand
        self.scent = scent

    def spray(self):
        print(f"{self.brand} perfume with {self.scent} scent 💨")


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, I'm {self.name} and I'm {self.age} years old 👋")



car = Car("BMW", "M5", 2022)
food = Food("Khinkali", 70)
cake = Napoleon("Large", 25)
perfume = Perfume("Dior", "Fresh")
person = Person("Gio", 18)

car.drive()
food.eat()
cake.describe()
perfume.spray()
person.introduce()
