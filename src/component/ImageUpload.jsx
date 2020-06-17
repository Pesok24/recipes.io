import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useDispatch } from 'react-redux';
// import { dressForNewLook } from '../redux/actioncreators/actionsSaga'

function CropForm() {
  const dispatch = useDispatch()
const [state,setState] = useState({
  src: null,
  crop: {
    unit: 'px', // default, can be 'px' or '%'
    x: 130,
    y: 50,
    width: 200,
    height: 200,
    aspect: 1 / 1,
  },
});
const [imageRef,setImageRef] = useState(null);
const [url,setUrl] = useState(null);
  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files);
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setState({...state, src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  // If you setState the crop in here you should return false.
  function onImageLoaded (image) {
    setImageRef(image)
  };
  function  onCropComplete (crop) {
    makeClientCrop(crop);
  };
  function onCropChange (crop, percentCrop) {
    // You could also use percentCrop:
    // setState({ crop: percentCrop });
    setState({...state, crop });
  };
  async function makeClientCrop(crop) {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef,
        crop,
        'newFile.jpeg'
      );
      setState({...state, croppedImageUrl });
    }
  }
  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    console.log(    ctx.drawImage);
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const dataUrl = canvas.toDataURL();
    setUrl(dataUrl)
    console.log('!!!!!!!!!!!!!!!!!!!!!!!',dataUrl);
    // dispatch(dressForNewLook('name',dataUrl))
  }
    const { crop, croppedImageUrl, src } = state;
    console.log('Обрезка фото>>>>>>>>>>>>>>>',state);
    
    return (
      <div className="App">
        <div>
          <input type="file" accept="image/*" onChange={onSelectFile} />
        </div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange}
          />
        )}
          <img alt="Crop" /* style={{ maxWidth: '100%' }} */ src={url} />
          <img alt="Crop" src='' />
      </div>
    );
}

export default CropForm
