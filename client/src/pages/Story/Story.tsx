import React from 'react';
import { stories } from '../../mockData/stories';
import "./Story.scss";

const Story: React.FC = () => {

  const listStories = stories.map((story, idx: number) => {
    return (
      <div className={`story-item col-12 col-lg-5 ${idx / 2 === 1 && "col-lg-6"}`} key={story.id}>
        <h3 className="title">{story.title}</h3>
        <p>{story.author}</p>
        <p>{story.date}</p>
        <p>{story.stories}</p>
      </div>
    )
  });

  return (
    <div className="page">
      <h1>Story</h1>
      <div className="story">
        { listStories }
      </div>
    </div>
  );
};

export default Story;
