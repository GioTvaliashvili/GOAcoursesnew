class Info{
         constructor(city,name,username,age){
            this.name = name
            this.username = username
            this.age = age

            
        }
            city(){
                return 'მე ვცხოვრობ თბილისში'
            }
            name(){
            return"გიო"
            }

            username(){
            return"თვალიაშვილი"
            }

            age(){
            return"მე ვარ 12 წლის"
            }
        }

        constructor = newConstructor('Tbilisi','Gio','Tvaliashvili','i am 12 years old')
        console.log(newConstructor)
        console.log(Info.city)
        console.log(Info.name)
        console.log(Info.username)
        console.log(Info.age)
        
        