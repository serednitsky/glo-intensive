const getData = (str) => {
    return fetch('https://serednitsky-db-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData