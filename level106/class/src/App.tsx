import { useState } from 'react'



function App() {

  const sendapidata =  async () => {

    try{
      const URL = "https://jsonplaceholder.typicode.com/posts";
      const sendData= {
        title:"zangis dgiuri",body:"ert dges zangi adga da mokvda"
      }
      const response = await fetch(URL, {
        method:"POST",headers:{"Content-Type":"aplicaton/json"},body:JSON.stringify(sendData)

      });
      const zangi = await response.json();
      console.log(zangi)
    }
    catch (eloli){
      console.error("THIS IS API NIGGER ERROR:",eloli)
    }
  }

  const getapidata = async () => {
    
    try{
      const URL = "https://jsonplaceholder.typicode.com/posts";
      // const sendData= {
      //   title:"zangis dgiuri",body:"ert dges zangi adga da mokvda"
      // }
      const response = await fetch(URL, {
        method:"GET",headers:{"Content-Type":"aplicaton/json"}

      });
      const zangi = await response.json();
      console.log(zangi)
    }
    catch (eloli){
      console.error("THIS IS API NIGGER ERROR:",eloli)
    }
  }
  

  return (
    <>
    <button onClick={sendapidata}>send to merabi</button>
    <button onClick={getapidata}>take from merabi</button>
    </>
  )
}

export default App
