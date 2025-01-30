import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import React from 'react';
import bookmark from '../../public/bookmark.svg'; // You can use this for a bookmark or any other functionality

const ImageCard = ({ image }) => {
  return (
    <Gallery>
      <div className="relative group">
        {/* Wrap the image in Item to enable PhotoSwipe */}
        <Item
          original={image.urls.full} // Original image to be displayed in the gallery
          thumbnail={image.urls.small} // Thumbnail for faster loading
          width={image.width} // The width of the image (can be provided if known)
          height={image.height} // The height of the image (can be provided if known)
        >
          {({ ref, open }) => (
            <a
              href="#"
              onClick={open} // Open the gallery when clicked
              ref={ref}
              className="block"
            >
              <img
                src={image.urls.small}
                alt={image.alt_description || 'Image'}
                className="w-full h-40 object-cover rounded-md"
              />
            </a>
          )}
        </Item>

        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-center">
              <p className="text-xs">
                @{image.user.username} - {image.likes || 245} likes
              </p>
            </div>
          </div>
        </div>
      </div>
    </Gallery>
  );
};

export default ImageCard;
