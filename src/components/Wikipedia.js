import React, { useState, useEffect } from 'react';
import Search from './Search';
import wikipedia from '../apis/wikipedia';

const Wikipedia = () => {
  const [searchTerm, setSearchTerm] = useState('react');
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikipedia.get('', {
        params: {
          srsearch: debouncedSearch,
        },
      });

      setResults(data.query.search);
    };

    if (debouncedSearch) {
      search();
    }
  }, [debouncedSearch]);

  const renderResults = results.map((result) => {
    const time = new Date(result.timestamp).toLocaleString();
    return (
      <div key={result.pageid} className="card m-2">
        <div className="card-body">
          <h5 className="card-title">{result.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{time}</h6>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: result.snippet }}
          ></p>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="card-link"
            target="_blank"
          >
            Go to Source
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        renderResults={renderResults}
        searchBar={'Search on Wikipedia'}
      />
    </>
  );
};

export default Wikipedia;
