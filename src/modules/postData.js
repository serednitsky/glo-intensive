const postData = () => {
    // return fetch('http://localhost:3000/goods/25', {
    //     method: 'DELETE',
    // })
    return fetch('https://serednitsky-db-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: "Шрек 2 (PS 5)",
            price: 2000,
            sale: false,
            img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
            hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
}

export default postData