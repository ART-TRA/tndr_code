import phone from "./../assets/img/phone.png"
import message from "./../assets/img/message.png"
import time from "./../assets/img/time.png"
import geo from "./../assets/img/geo.png"

const initialState = {
    items: [
        {id: 1, text: "8 (111) 222-33-44", image: phone},
        {id: 2, text: "Пн-Пт 10:00-18:00", image: time},
        {id: 3, text: "order@buhone.ru", image: message},
        {id: 4, text: "Невский пр. 130", image: geo},
    ]
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default headerReducer