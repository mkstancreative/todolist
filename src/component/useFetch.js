import { useEffect, useState } from "react";

function useFetch(url) {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const abortCount = new AbortController();
    fetch(url, { signal: abortCount.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fecth from this resourse");
        }
        return res.json();
      })
      .then((result) => {
        setTodos(result);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
        }
      });

    return () => abortCount.abort();

  }, [url]);

  
  const handleDelete = (id) => {
    if(window.confirm("Do you want to Delete?")){

      fetch("https://63f3e9d6de3a0b242b4b1249.mockapi.io/todos/" + id, {
        method: "DELETE",
      }).then(() => {
        alert("Removed Successfully")
        window.location.reload();
      })
      .catch((err) =>{
        console.log(err.message);
      })
    };

    }

  return { todos, error, handleDelete };
}

export default useFetch;
