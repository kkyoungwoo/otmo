import Image1 from '../../../assats/image1.png'
import Image2 from '../../../assats/image2.png'
import Image3 from '../../../assats/image3.png'
import Image4 from '../../../assats/image4.png'

const getImage = idx =>{
    switch(idx){
        case 1:
            return Image1;
        case 2:
            return Image2;
        case 3:
            return Image3;
        case 4:
            return Image4;
        default:
            return Image1;
    }
}

export default getImage;