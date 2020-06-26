import clientImg from "./../assets/img/client.png"

const initialState = {
    clients: [
        {id: 1, image: clientImg},
        {id: 2, image: clientImg},
        {id: 3, image: clientImg},
        {id: 4, image: clientImg},
        {id: 5, image: clientImg},
        {id: 6, image: clientImg},
        {id: 7, image: clientImg},
        {id: 8, image: clientImg},
        {id: 9, image: clientImg}
    ]
};

const clientsReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
};

export default clientsReducer