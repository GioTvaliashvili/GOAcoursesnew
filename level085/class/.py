class MyClass:
    def __init__(self, name ,age):
        self.name = name
        self.age = age

    def Greeting(self):
        return f"name : {self.name}, age : {self.age}"
    


class Zebra(MyClass):
    def __init__(self, fname, lname):
        MyClass.__init__(self, fname, lname)
        

 
    
New_MyClass = Zebra('Grisha','Oniani')
print(New_MyClass.Greeting())
