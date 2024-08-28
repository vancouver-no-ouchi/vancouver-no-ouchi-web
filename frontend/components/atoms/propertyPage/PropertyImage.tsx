import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type PropertyImageProps = {
  imgUrl: string;
  title: string;
  imgLink: string;
};
const PropertyImage: FC<PropertyImageProps> = ({ imgUrl, title, imgLink }) => {
  return (
    <div className="propertyPageImage mt-2 flex flex-col">
      {imgUrl ? (
        <div>
          <Image
            src={imgUrl}
            alt={title ?? "物件画像"}
            className="rounded-t-lg object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          <a
            href={imgLink}
            target="_blank"
            className="inline-block p-2 shadow-lg text-white absolute bottom-0 left-0 w-full bg-slate-400 hover:bg-black bg-opacity-70 hover:bg-opacity-70 text-center"
          >
            もっと見る
          </a>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          画像がありません
        </div>
      )}
    </div>
  );
};

export default PropertyImage;
