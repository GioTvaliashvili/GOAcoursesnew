

# class Lomi:
   
#     simba = 'mefe lomi 2'
#     mufasa = 'mefe lomi 1'

    
    

# new_my_lomi = Lomi()
# print(new_my_lomi.simba )
# print(new_my_lomi.mufasa )


# class Car:

#  def __init__(self, engine,interior):
#     self.engine = engine
#     self.interior = interior
# NewCar = Car('2JZ','5star')

# print(NewCar)
   

class Info:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"name: {self.name}, age: {self.age}"
    
    
newinfo = Info('Gio',13)
print(newinfo)