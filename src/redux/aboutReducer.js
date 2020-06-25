
const initialState = {
    aboutCards: [
        {
            id: 1,
            title: 90,
            subtitle: "Завершено крупных сделок",
            textLink: "Все кейсы"
        },
        {
            id: 2,
            title: 90,
            subtitle: "Завершено крупных сделок",
            textLink: "Все кейсы"
        },
        {
            id: 3,
            title: 90,
            subtitle: "Завершено крупных сделок",
            textLink: "Все кейсы"
        },
        {
            id: 4,
            title: 90,
            subtitle: "Завершено крупных сделок",
            textLink: "Все кейсы"
        },
    ]
};

const aboutReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
};

export default aboutReducer