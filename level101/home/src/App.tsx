import Profile from './components/Profie'
import MenuItem from './components/MenuItem'
import Menu from './components/Menu'
import Courses from './components/Courses'
function App() {


  return (
    <>
    {/* props არის ობიექტი რომელიც მშობელი ობიექტიდან გადაეცემა შვილ კომპონენტს */}
    <Profile username="gia" password="suramelashvili" email="giamaladoi@gmail.com" age={100} profilePic="https://i1.sndcdn.com/avatars-000332215745-7wqyvc-t1080x1080.jpg">
      
    </Profile>

    <MenuItem item="xinkali" price={2.20} id={286} discount={2} color="white" ingredients="dom,meat,salt,pepper,dzira and vegetables" ></MenuItem>


    <Menu></Menu>
   <Courses></Courses>
    





    </>
  )
}

export default App
