import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from '../../../frontend/infused/src/Components/data/data';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from '../../../frontend/infused/src/Components/Gallery/images';

import Nav from '../../../frontend/infused/src/Components/Navbar/Navbar'

import Buttomsearch from '../../../frontend/infused/src/Components/buttom-search/Buttomsearch'
// import SearchBar from '../Components/Search/search2'
import Search2 from '../../../frontend/infused/src/Components/Search/search2';
import './Gallery.css'





const Gallery = () => {
  const [index, setIndex] = useState(-1);


  return (


<div>
       <Nav />


        

        <div className="wrap"  style={ {}}> 


      <Search2 />

      
        </div> 
     
     
      <div className="container"  style={ {width:"100%", height:"200px", backgroundColor:"white"}}>

      <div className="btnwrap" style={{width:"65%", display:"flex" , backgroundColor:"white", margin:"auto", gap:"20px", justifyContent:"center",  }}>
                <Buttomsearch 
                text="Men Shirt" backgroundColor="#3B4054" textColor="white" />  
                
                 <Buttomsearch 
                  text="Ankara" backgroundColor="gold" textColor="white" />

                  <Buttomsearch 
                  text="wedding" backgroundColor="#3B4054" textColor="white" />

                 

                  {/* <Buttomsearch text="Yet Another Text" backgroundColor="#B63D56" textColor="black" /> */}

                  <Buttomsearch 
                  text="Men Suits" backgroundColor="#D8A475" textColor="black" />
                  <Buttomsearch 
                  text="Ankara" backgroundColor="gold" textColor="white" />

                  <Buttomsearch 
                  text="wedding" backgroundColor="#3B4054" textColor="white" />

                  <Buttomsearch 
                  text="Local Shoes" backgroundColor="#958992" textColor="black" />

                  <Buttomsearch 
                  text="Kaba and Slit" backgroundColor="#958992" textColor="black" />

</div>
</div>
  
  
                
             
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
        
        maxWidthValue="98%" 
        gridColumnsValue="repeat(auto-fit, minmax(25rem, 1fr))"
        // headerText=' '
        // wide=" "
        // galleryTextmargin = " "
        // wider = " "
        // imagepaddingTop = " "
        // backHeigth = " "
        // imageColor= "rgb(248, 240, 240)"
        textmarginBottom = "0"
        textpadding ="0"
        
        
        
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
     
</div>
  )
}

export default Gallery