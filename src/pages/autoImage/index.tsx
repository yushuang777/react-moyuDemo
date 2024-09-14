import React from "react";
import "./index.css";
import testImg from "./test.png";

const getRandomSize = () => {
  const minSize = 100;
  const maxSize = 300;
  const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  return size;
};

// 随机生成图片的数组
const generateRandomImages = (count: number) => {
  const images: { width: string; height: number; src: any }[] = [];
  for (let i = 0; i < count; i++) {
    const item = {
      src: testImg, // 图片源
      width: "150px",
      height: getRandomSize(),
    };
    images.push(item);
  }
  return images;
};

const AutoImage = () => {
  const images = generateRandomImages(20);

  return (
    <div className="content">
      {images.map(
        (image: { width: string; height: number; src: string }, index) => (
          <div className="imgBox" key={index}>
            <img
              style={{ width: image.width, height: image.height }}
              src={image.src}
              alt={""}
            />
          </div>
        )
      )}
    </div>
  );
};

export default AutoImage;
