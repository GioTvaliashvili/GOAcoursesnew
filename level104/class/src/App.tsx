import {
  createContext,
  Fragment,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import "./App.css";

export const context = createContext<
  [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);

interface ApiDataTypes {
  userId: number;
  id: number;
  title: string;
  complited: boolean;
}

function App() {
  const [contextext, setContextext] = useState(0);

  const [data, setData] = useState<ApiDataTypes[]>([
  {
    userId: 1,
    id: 2,
    title: "",
    complited: false,
  }
  ]);

  const handleDataFetch = async () => {
    const URL = "https://jsonplaceholder.typicode.com/todos/1";
    const URL2 = "https://jsonplaceholder.typicode.com/posts";
    const request = await fetch(URL2);
    const data = await request.json();

    setData(data);

    console.log(data);
  };

  return (

    <context.Provider value={[contextext, setContextext]}>
      <div>
        {data.map((item, index) => (
          <Fragment key={index}>
              <div>{item.id}</div>
              <div>{item.userId}</div>
              <div>{item.title}</div>
              <div>{item.complited}</div>
          </Fragment>

  ))}
      </div>
      <button onClick={handleDataFetch}>async button</button>
    </context.Provider>
  );
}

export default App;