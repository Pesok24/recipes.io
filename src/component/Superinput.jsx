import { TagInput } from 'reactjs-tag-input';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Superinput() {
  const dispatch = useDispatch();
  //  const superinput = useSelector((state) => state.superinput);
  const [tags, setTags] = useState([]);

  function onTagsChanged(tags) {
    setTags(tags);
  }

  async function fetchdata(tags) {
    dispatch({ type: 'SUPERINPUT-F', superinput: false });
    let data = '';
    for (let i of tags) data += i.displayValue + ',';
    let response = await fetch('/recipe/apisearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: data }),
    });
    const result = await response.json()
    console.log(result);
    return result;
  }

  return (
    <>
      <img
        src='https://lh3.googleusercontent.com/proxy/_VMDWt3L-SgRSSP_8oh8TIpulboA0Q4r1f8Y-t8qQVmKaPOlggsfABzzqd7KWOlXRU3K-6dzDkXLUad02nehGSO3jA'
        alt=''
        width='25px'
        className='close'
        onClick={() => dispatch({ type: 'SUPERINPUT-F', superinput: false })}
      />
      <br />
      <div className='tags'>
        <TagInput tags={tags} onTagsChanged={onTagsChanged} />
        <div
          className='search-button'
          onClick={() => {
            fetchdata(tags);
          }}
        >
          Поиск
        </div>
      </div>
    </>
  );
}

export default Superinput;
