import "./app.css";
import Banner from "./Component/Banner";
import Row from "./Component/Row";
import request from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello Ansh Doshi</h1>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="HorrorMovies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies} />
    </div>
  );
}

export default App;
