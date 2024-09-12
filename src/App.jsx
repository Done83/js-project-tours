import { useEffect, useState } from "react";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    };
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <h2>Tours Starter</h2>;
};
export default App;
