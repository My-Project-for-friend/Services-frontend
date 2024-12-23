"use client";
import { FaUser, FaFlag } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useState } from "react";

export default function ServiceCard({ item, onClick }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // if (item?.images?.[0]?.base64 && item?.images?.[0]?.mimetype) {
    //   const base64ToBlob = (base64, mimeType) => {
    //     const byteCharacters = atob(base64);
    //     const byteNumbers = new Array(byteCharacters.length);
    //     for (let i = 0; i < byteCharacters.length; i++) {
    //       byteNumbers[i] = byteCharacters.charCodeAt(i);
    //     }
    //     const byteArray = new Uint8Array(byteNumbers);
    //     return new Blob([byteArray], { type: mimeType });
    //   };
    //   const imageBlob = base64ToBlob(
    //     item.images[0].base64,
    //     item.images[0].mimetype
    //   );
    //   setImageUrl(URL.createObjectURL(imageBlob));
    // }
  }, [item]);

  return (
    <Card
      key={item?._id}
      onClick={onClick}
      className="transition-transform transform hover:scale-105 bg-neutral-50 dark:bg-neutral-800"
    >
      <CardHeader className="flex items-center justify-center bg-blue-500 dark:bg-blue-700 p-6 rounded-t-lg">
        {/* {imageUrl ? ( */}
        {/* <img */}
        {/* src={imageUrl} */}
        {/* alt={item?.images?.[0]?.originalName || "Service Image"} */}
        {/* className="h-24 w-24 object-cover rounded-full" */}
        {/* /> */}
        {/* ) : ( */}
        <FaUser className="text-6xl text-white" />
        {/* )} */}
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-lg font-semibold text-neutral-800 dark:text-neutral-50">
          {item?.title || "Untitled Service"}
        </CardTitle>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          {item?.description || "No description available."}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-700 dark:text-neutral-400 mt-4">
          {item?.age && (
            <div className="flex items-center gap-2">
              <FaUser />
              <span>{item.age} yrs</span>
            </div>
          )}
          {item?.ethnicity && (
            <div className="flex items-center gap-2">
              <FaFlag />
              <span>{item.ethnicity}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-b-lg">
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          Professional Member
        </p>
      </CardFooter>
    </Card>
  );
}
