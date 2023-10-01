import React from "react";
import ImageUploading from "react-images-uploading";

export default function UploadImg() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
    <div className="">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              className="p-2 pt-1 pb-1  text-white rounded-2xl bg-blue-400 mb-4"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button
              onClick={onImageRemoveAll}
              className="p-2 pt-1 pb-1  text-white rounded-2xl bg-red-400 "
            >
              Remove All
            </button>
            {imageList.reverse().map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={image["data_url"]}
                  alt=""
                  width="100"
                  className="w-[16rem] h-[16rem] object-cover rounded-lg"
                />
                <div className="image-item__btn-wrapper mt-2 flex gap-2 pt-1 pb-1">
                  <button
                    onClick={() => onImageUpdate(index)}
                    className="w-[5rem] h-[1.8rem] text-white rounded-2xl bg-green-400 "
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onImageRemove(index)}
                    className="w-[5rem] h-[1.8rem] text-white rounded-2xl bg-red-400 "
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
