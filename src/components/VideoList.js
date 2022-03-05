import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <div
        style={{ cursor: 'pointer' }}
        className="card m-2"
        onClick={() => onVideoSelect(video)}
        key={video.id.videoId}
      >
        <img
          alt={video.snippet.title}
          className="card-img-top"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="card-footer">
          <h5 className="card-title">{video.snippet.title}</h5>
        </div>
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
