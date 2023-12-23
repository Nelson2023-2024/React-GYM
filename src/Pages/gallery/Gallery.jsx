import './gallery.css';
import PrimaryHeader from '../../Components/PrimaryHeader';
import HeaderImage from '../../images/header_bg_2con.jpg';

// Import all gallery images separately
import galleryImage1 from '../../images/gallery1.jpg';
import galleryImage2 from '../../images/gallery2.jpg';
import galleryImage3 from '../../images/gallery3.jpg';
import galleryImage4 from '../../images/gallery4.jpg';
import galleryImage5 from '../../images/gallery5.jpg';
import galleryImage6 from '../../images/gallery6.jpg';
import galleryImage7 from '../../images/gallery7.jpg';
import galleryImage8 from '../../images/gallery8.jpg';
import galleryImage9 from '../../images/gallery9.jpg';
import galleryImage10 from '../../images/gallery10.jpg';
import galleryImage11 from '../../images/gallery11.jpg';
import galleryImage12 from '../../images/gallery12.jpg';
import galleryImage13 from '../../images/gallery13.jpg';
import galleryImage14 from '../../images/gallery14.jpg';
import galleryImage15 from '../../images/gallery15.jpg';

function Gallery() {
  // Create an array with all the imported images
  const images = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage6, galleryImage7, galleryImage8,galleryImage9, galleryImage10, galleryImage11,galleryImage12, galleryImage13, galleryImage14, galleryImage15 ];

  return (
    <>
      <PrimaryHeader title={'Our Gallery'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia non vel, explicabo sapiente reprehenderit animi similique temporibus reiciendis iusto quod, dignissimos vitae laborum labore consequuntur sit autem cum? Molestiae.
      </PrimaryHeader>
      <div className="container gallery__container">
        {images.map((image, index) => (
          <article key={index}>
          <img  src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </article>
        ))}
      </div>
    </>
  );
}

export default Gallery;
