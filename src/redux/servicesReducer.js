import cardImg from "./../assets/img/card.png"

const initialState = {
    servicesCards: [
        {id: 1, title: "Бухгалтерское обслуживание", image: cardImg},
        {id: 2, title: "Бухгалтерское обслуживание", image: cardImg},
        {id: 3, title: "Бухгалтерское обслуживание", image: cardImg},
        {id: 4, title: "Бухгалтерское обслуживание", image: cardImg},
        {id: 5, title: "Бухгалтерское обслуживание", image: cardImg},
        {id: 6, title: "Бухгалтерское обслуживание", image: cardImg}
    ]
};

const servicesReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
};

export default servicesReducer