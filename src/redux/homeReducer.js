import homeImg from "./../assets/img/home.png"


const initialState = {
    homeSlider: [
        {id: 0, title: "Бухгалтерские услуги в Санкт-Петербурге"},
        {id: 1, title: "Бухгалтерские услуги в Рио де Жанейро"},
        {id: 2, title: "Бухгалтерские услуги в Стокгольме"},
        {id: 3, title: "Бухгалтерские услуги в Токио"},
        {id: 4, title: "Бухгалтерские услуги в Лос Анжелесе"}
    ]
};

const homeReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
};

export default homeReducer