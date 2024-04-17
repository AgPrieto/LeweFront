import img from './assets/leweCarusel1.png';
import imgMobile from './assets/mobileImg1.png';
import imgMobile2 from './assets/mobileImg2.png';
import imgMobile3 from './assets/mobileImg3.png';

const data = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
        image: window.innerWidth <= 768 ? imgMobile : img 
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 24,
        image: window.innerWidth <= 768 ? imgMobile2 :  "https://d22fxaf9t8d39k.cloudfront.net/d00baf081f2e0ba89f200fb3677cfcfa09de99a2af0e15bf4ca4fe495d7add67208360.png"
    },
    {
        id: 3,
        name: 'John Smith',
        age: 26,
        image:window.innerWidth <= 768 ? imgMobile3 : "https://d22fxaf9t8d39k.cloudfront.net/8d7f080d54988a4e1c341de8fb1e02b1133fb8bf17b4a92410b495e049f1474c208360.png"
    },
]
export default data