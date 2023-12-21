import './gallery.css'

//reusable compontents
import PrimaryHeader from '../../Components/PrimaryHeader'
import HeaderImage from '../../images/header_bg_2con.jpg'


function Gallery() {

  // const galleryLength = 15;
  // const images = []

  // for(let i = 1; i <= galleryLength; i++){
  //   images.push(import(`../../images/gallery${i}`))
  // }

  
  return (
    <>
    
    <PrimaryHeader title={'Our Gallery'} image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia non vel, explicabo sapiente reprehenderit animi similique temporibus reiciendis iusto quod, dignissimos vitae laborum labore consequuntur sit autem cum? Molestiae.
    </PrimaryHeader>
    </>
  )
}

export default Gallery
