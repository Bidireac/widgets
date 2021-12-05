import React, { useState, useEffect } from 'react';
import Search from './Search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const Youtube = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('traversy');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const renderResults = (
    <div className="row">
      <div className="col-9">
        <VideoDetail video={selectedVideo} />
      </div>
      <div className="col-3">
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </div>
    </div>
  );

  return (
    <>
      <Search
        setSearchTerm={search}
        renderResults={renderResults}
        searchBar={'Search on Youtube'}
      />
    </>
  );
};

export default Youtube;
