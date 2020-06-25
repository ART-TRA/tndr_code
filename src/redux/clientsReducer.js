import clientImg from "./../assets/img/client.png"

const initialState = {
    clients: [
        {id: 1, image: clientImg},
        {id: 2, image: clientImg},
        {id: 3, image: clientImg},
        {id: 4, image: clientImg}
    ]
};

const clientsReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
};

export default clientsReducer