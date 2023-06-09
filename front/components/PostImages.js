import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { backUrl } from '../config/config';
import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  });

  if (images.length === 1) {
    return (
      <>
        <img
          width="100%"
          role="presentation"
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImageZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <div>
        <img
          width="50%"
          role="presentation"
          src={`${backUrl}/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          width="50%"
          role="presentation"
          src={`${backUrl}/${images[1].src}`}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </div>
    );
  }
  return (
    <div>
      <img
        width="50%"
        role="presentation"
        src={`${backUrl}/${images[0].src}`}
        alt={images[0].src}
        onClick={onZoom}
      />
      <div
        role="presentation"
        style={{
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}개의 사진 더보기
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </div>
  );
};

PostImages.propTypes = {
  image: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
