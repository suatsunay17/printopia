import React from "react";
import './Gallery.scss';

import SinglePost from "./SinglePost/SinglePost";

function Gallery() {
  const collection = [
    {
      name: "dragon",
      img: "https://cdn.thingiverse.com/assets/09/0b/67/3d/c3/large_display_a4c9a996-4002-405c-8661-374c83a0bf07.jpg",
      id: 1,
    },
    {
      name: "cable holder",
      img: "https://cdn.thingiverse.com/assets/52/86/1b/6c/20/large_display_f315eba9-6c0f-4793-88af-c9839b142422.jpg",
      id: 2,
    },
    {
      name: "yin & yang tree",
      img: "https://cdn.thingiverse.com/assets/44/ea/b1/f9/3a/large_display_41d59071-3d21-4e2f-b016-385dbd106434.jpeg",
      id: 3,
    },
    {
      name: "owl",
      img: "https://cdn.thingiverse.com/assets/da/ce/97/8b/02/03fba390-33b9-4149-8857-ef695ae2d8b7.jpg",
      id: 4,
    },
    {
      name: "low poly otter",
      img: "https://cdn.thingiverse.com/assets/93/b0/5c/d0/07/large_display_3f5f4cae-506a-44e5-bb15-66bd075366d3.png",
      id: 5,
    },
  ];

  return (
    <div className="gallery">
      <ul>
        {collection.map((item) => 
          <li key={item.id}>
            <SinglePost item={item} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Gallery;
