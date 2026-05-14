import { useEffect, useState } from 'react'



function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [justData,setJustData] = useState(false)

  useEffect(() => {
    try {
      getdata();
      console.log("gia gaormagda")
    } catch (err) {
      console.error(err)
    }
   

  }, [justData]);
function handleClick(){
  setJustData(!justData)
console.log("just Click")
}



  async function getdata() {
    try {
      const URL = "https://api.github.com/users/GioTvaliashvili";

      const responce = await fetch(URL, 
       
      );
      const data = await responce.json();
      setIsLoading(false);
      setData(data);
    } catch (err) {
      console.log(err)
    }
  }
  console.log(data);
  return (
    <>
      {isLoading ? <div>loading...</div> : null}
      {isLoading ? (
        <div>no data fetch</div>
      ) : (
        <div>
          <h1>title: {data.title}</h1>
          <h2>userId: {data.userId}</h2>
          <h2>completed: {JSON.stringify(data.completed)}</h2>


        </div>
      )}

      <button onClick={handleClick}>get from merabi</button>
    </>
  )
}

export default App
