import React from 'react';
import VideoListItem from './video_list'
const video_list = () => {
  const VideoItems = props.videos.map((videos){
    return <VideoListItem video={video} />
  });
  return (
    <ul className='col-md-4 list-group'>
    </ul>
    {props.videos.length}
  );

}
export Default VideoList;
