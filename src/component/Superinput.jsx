import { TagInput } from 'reactjs-tag-input';
import React, { useState } from 'react';

function Superinput() {
  const [tags, setTags] = useState([]);


  function onTagsChanged(tags) {
    setTags(tags);
  }
  return (
    <>
      <img
        src='https://pngimg.com/uploads/tomato/tomato_PNG12549.png'
        alt=''
        width='150px'
        style={{ left: 30 }}
      />
      <br />
      <div className='tags'>
        <TagInput tags={tags} onTagsChanged={onTagsChanged} /><button>Поиск</button>
      </div>
    </>
  );
}

export default Superinput;
