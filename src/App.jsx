import { useState, useEffect } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch joke
  const fetchJoke = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );

      const data = await response.json();

      setJoke(data.joke);
    } catch (error) {
      setJoke("Failed to load joke.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch joke when component loads
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Programming Joke Generator</h2>

      {/* One paragraph tag */}
      <p>{loading ? "Loading..." : joke}</p>

      {/* One button */}
      <button onClick={fetchJoke}>
        Get New Joke
      </button>
    </div>
  );
}

export default App;
