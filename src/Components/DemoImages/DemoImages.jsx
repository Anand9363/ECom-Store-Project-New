import { seaImage } from "../../Assests/image";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const DemoImages=(props)=>{
    console.log(props);

    const{onInc,onDec}=props;
    

    const MyImage = ({  }) => (
        <LazyLoadImage
          alt={seaImage}
          effect="blur"
          wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: {transitionDelay: "1s"},
          }}
          src={seaImage} />
      );

    return(
        <>
        <p>DemoImages in child images</p>
          <button onClick={() => {
                
                // console.log(value);
                console.log("Button Clicked +");
                onInc()
            }}>+</button>



            <button onClick={() => {
              
                // console.log(value);
                console.log("Button Clicked - ");
                onDec()
            }}>-</button>
        
        
        </>
    )
}
export default DemoImages;