import './uploadImage.scss';
import { useState, useEffect, useCallback, useRef } from "react";
import FileUploadService from '#services/api/FileUploadService';

function UploadImage({ multipleUploads, bare, id, setState, existingImages = []}) {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const [message, setMessage] = useState([]);
  const [imageInfos, setImageInfos] = useState([]);
  const progressInfosRef = useRef(null);

  if (existingImages.length > 0) {
    setImagePreviews(existingImages);
  }

 const upload = useCallback((idx, file) => {
    let _progressInfos = [...progressInfosRef.current.val];

    file.originalName = file.name;

    return FileUploadService.upload(file, (event) => {
      let _progressInfo = _progressInfos[idx];
      _progressInfo.percentage = Math.round((100 * event.loaded) / event.total);
      _progressInfos[idx] = _progressInfo;
      setProgressInfos({ val: _progressInfos });
    })
      .then((response) => {
        setState(prev => [...prev, response.data.file]);

        setMessage((prevMessage) => [
          ...prevMessage,
          "Imagen " + file.name + " almacenada con éxito"
        ]);
      })
      .catch((error) => {
        console.log(error);
        _progressInfos[idx].percentage = 0;
        setProgressInfos({ val: _progressInfos });
        setMessage((prevMessage) => [
          ...prevMessage,
          "No fue posible almacenar la imagen " + file.name
        ]);
      });
  }, [setState]);

  const uploadImages = useCallback(() => {
    if (!selectedFiles) return;

    setState([]);

    const files = Array.from(selectedFiles);

    let _progressInfos = files.map((file) => ({
      percentage: 0,
      fileName: file.name
    }));

    progressInfosRef.current = { val: _progressInfos };

    const uploadPromises = files.map((file, i) => upload(i, file));

    Promise.all(uploadPromises).then(() => {
      console.log(uploadPromises);
    });
  }, [selectedFiles, upload, setState]);

  useEffect(() => {
    if (bare) {
      return;
    }
  }, [bare, id]);

  const selectFiles = (event) => {
    let images = [];

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }

    setSelectedFiles(event.target.files);
    setImagePreviews(images);
    setProgressInfos({ val: [] });
    setMessage([]);
  }

  useEffect(() => {
    if (selectedFiles) {
      uploadImages();
    }
  }, [selectedFiles, uploadImages]);


  return (
     <div id="uploadImage" className="w-100 px-3">
      {imagePreviews
        && !bare
        && (
        <div>
          {imagePreviews.map((img, i) => {
            return (
              <img className="preview" src={img} alt={"image-" + i} key={i} />
            );
          })}
        </div>
      )}

      {message.length > 0 && (
        <div className="alert alert-secondary mt-2" role="alert">
          <ul>
            {message.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      )}

      {imageInfos.length > 0 && (
        <div className="card mt-3">
          <div className="card-header">List of Images</div>
          <ul className="list-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img, index) => (
                <li className="list-group-item" key={index}>
                  <p>
                    <a href={img.url}>{img.name}</a>
                  </p>
                  <img src={img.url} alt={img.name} height="80px" />
                </li>
              ))}
          </ul>
        </div>
      )}
        <div className={"text-center col-12"}>
          <label htmlFor="input-file" className="btn btn-success btn-sm w-100 p-3">
              Upload
          </label>
          <input
              id="input-file"
              name="input-file"
              type="file"
              multiple={multipleUploads}
              accept="image/*"
              onChange={selectFiles}
            />
        </div>
    </div>
  )
}

export default UploadImage;