import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const videoLink = `https://youtu.be/${video.id.videoId}`;

  return (
    <div className="card p-2 m-3">
      <iframe
        title="video player"
        src={videoSrc}
        className="card-img-top"
        alt={video.snippet.title}
        style={{ height: '60vh' }}
      />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
        <a target="_blank" href={videoLink} className="btn btn-primary">
          {video.snippet.channelTitle}
        </a>
      </div>
    </div>
  );
};

export default VideoDetail;
