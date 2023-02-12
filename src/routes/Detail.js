import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import styles from "./Detail.module.css";
import { apiUrl } from "../url";

const Detail = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  const getDetail = async () => {
    const json = await (await fetch(apiUrl.detail(id))).json();
    setResults(json.data.results);
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout backBtn>
      <div>
        {results &&
          results.map((result) => (
            <div key={result.id} className={styles.container}>
              <h1 className={styles.detailTitle}>{result.name}</h1>
              <img
                className={styles.detailImg}
                src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                alt={result.name}
              />

              {result.description && (
                <p className={styles.description}>{result.description}</p>
              )}

              {result.comics.items.length > 0 && (
                <div className={styles.comics}>
                  <h2>Comics</h2>
                  <ul>
                    {result.comics.items.map((comic) => (
                      <li key={comic.name}>{comic.name}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.series.items.length > 0 && (
                <div className={styles.series}>
                  <h2>Series</h2>
                  <ul>
                    {result.series.items.map((serie) => (
                      <li key={serie.name}>{serie.name}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.stories.items.length > 0 && (
                <div className={styles.stories}>
                  <h2>Stories</h2>
                  <ul>
                    {result.stories.items.map((story) => (
                      <li key={story.name}>{story.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Detail;
