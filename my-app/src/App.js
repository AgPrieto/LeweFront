import img from './assets/carusel3.png';
import img1 from './assets/carusel4.png'
import img2 from './assets/carusel12.png';
import imgMobile2 from './assets/mobileImg2.png';

const data = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
        image: window.innerWidth <= 768 ? img : img 
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 24,
        image: window.innerWidth <= 768 ? imgMobile2 :  img2
    },
    {
        id: 3,
        name: 'John Smith',
        age: 26,
        image:window.innerWidth <= 768 ? img1 : img1
    },
]
export default data