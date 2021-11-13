import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className=" galleryBackground">
      <div className="container py-5">
        <h2 className="text-center text-success my-5"> Our Photo Gallery</h2>
        <h3 className="text-center py-4">
          See and get mesmerized by the photos of our collections.
        </h3>
        <div className="gallery">
          <div className="galleryColumn">
            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/YhPWzzD/photo-1550377458-0c50c6e8d72f.jpg"
                  alt="Portrait by Jessica Felicio"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/jH8HgRL/photo-1472806426350-603610d85659.jpg"
                  alt="Portrait by Oladimeji Odunsi"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/mXyxJj2/photo-1491947153227-33d59da6c448.jpg"
                  alt="Portrait by Alex Perez"
                  className="galleryImage"
                />
              </figure>
            </a>
          </div>

          <div className="galleryColumn">
            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/x2VnxPK/photo-1502767089025-6572583495f9.jpg"
                  alt="Portrait by Noah Buscher"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/KwCN1sf/photo-1611558709798-e009c8fd7706.jpg"
                  alt="Portrait by Ivana Cajina"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/Yt2gJTL/photo-1594830564484-506911d0f97b.jpg"
                  alt="Portrait by Sam Burriss"
                  className="galleryImage"
                />
              </figure>
            </a>
          </div>

          <div className="galleryColumn">
            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/nf1q8Vp/photo-1589642380614-4a8c2147b857.jpg"
                  alt="Portrait by Mari Lezhava"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/X3sjLv8/photo-1572635196237-14b3f281503f.jpg"
                  alt="Portrait by Ethan Haddox"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/Pj60zWR/photo-1536766820879-059fec98ec0a.jpg"
                  alt="Portrait by Amir Geshani"
                  className="galleryImage"
                />
              </figure>
            </a>
          </div>

          <div className="galleryColumn">
            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/M8nRwy9/photo-1625591342274-013866180475.jpg"
                  alt="Portrait by Guilian Fremaux"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/kBwGYLs/photo-1530432999454-016a47c78af3.jpg"
                  alt="Portrait by Jasmin Chew"
                  className="galleryImage"
                />
              </figure>
            </a>

            <a href="#" className="galleryLink">
              <figure className="galleryThumb">
                <img
                  src="https://i.ibb.co/s2n3N5n/photo-1511499767150-a48a237f0083.jpg"
                  alt="Portrait by Dima DallAcqua"
                  className="galleryImage"
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
