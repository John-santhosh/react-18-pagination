import { useEffect, useState } from "react";
import Follower from "./Follower";
import { useFetch } from "./useFetch";
function App() {
  const { data, loading } = useFetch();
  // console.log(data);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  const nextpage = () => {
    setPage((prev) => {
      const nextPage = prev + 1;
      if (nextPage > data.length - 1) {
        return 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((prev) => {
      const nextPage = prev - 1;
      if (nextPage < 0) {
        return data.length - 1;
      }
      return nextPage;
    });
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {loading ? (
          <></>
        ) : (
          data.map((_, ind) => {
            return (
              <button
                className={`page-btn ${ind === page ? "active-btn" : null}`}
                onClick={() => setPage(ind)}
                key={ind}
              >
                {ind + 1}
              </button>
            );
          })
        )}
        <button className="prev-btn" onClick={nextpage}>
          next
        </button>
      </div>
    </main>
  );
}

export default App;
