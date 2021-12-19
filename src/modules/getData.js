const getData = () => {
    return fetch('https://serednitsky-test-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData