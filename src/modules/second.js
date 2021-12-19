import getData from './getData'
import postData from "./postData";

const second = () => {
    const cartBtn = document.getElementById('cart')

    cartBtn.addEventListener('click', () => {
        postData().then((data) => {
            console.log(data)

            getData().then((data) => {
                console.log(data)
            })
        })
    })
}


export default second
