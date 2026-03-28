from turtle import*


#step one draw a square
begin_fill()
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#endofsquare
begin_fill()
forward(70)
color("yellow")
left(90)
forward(100)#heightofdoor
right(90)
forward(60)
right(90)
forward(100)
end_fill()

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#mirrors
color("cyan")
begin_fill()
penup()
goto(20,125)
pendown()
left(210)
forward(50)
right(90)
forward(50)
left(270)
forward(50)
right(90)
forward(50)
end_fill()
begin_fill()
penup()
goto(125,125)
pendown()
left(180)
forward(50)


left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
end_fill()












































exitonclick()