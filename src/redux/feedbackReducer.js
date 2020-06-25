import clientImg from "./../assets/img/photo.png"
import React from "react";

const initialState = {
    clients: [
        {
            id: 1, image: clientImg,
            name: "Екатерина Иванова",
            post: "Директор ООО “Раз-два”",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet" +
                "animi aperiam consequatur eveniet impedit, ipsum laudantium maiores nesciunt" +
                "nisi non odit quam qui quibusdam quis rerum suscipit veritatis! Lorem ipsum" +
                "dolor sit amet, consectetur adipisicing elit. Asperiores consequatur cupiditate" +
                "dolor fugiat molestiae mollitia nesciunt"
        },
        {
            id: 2, image: clientImg,
            name: "Екатерина Иванова",
            post: "Директор ООО “Раз-два”",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet" +
                "animi aperiam consequatur eveniet impedit, ipsum laudantium maiores nesciunt" +
                "nisi non odit quam qui quibusdam quis rerum suscipit veritatis! Lorem ipsum" +
                "dolor sit amet, consectetur adipisicing elit. Asperiores consequatur cupiditate" +
                "dolor fugiat molestiae mollitia nesciunt"
        },
        {
            id: 3, image: clientImg,
            name: "Екатерина Иванова",
            post: "Директор ООО “Раз-два”",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet" +
                "animi aperiam consequatur eveniet impedit, ipsum laudantium maiores nesciunt" +
                "nisi non odit quam qui quibusdam quis rerum suscipit veritatis! Lorem ipsum" +
                "dolor sit amet, consectetur adipisicing elit. Asperiores consequatur cupiditate" +
                "dolor fugiat molestiae mollitia nesciunt"
        },
        {
            id: 4, image: clientImg,
            name: "Екатерина Иванова",
            post: "Директор ООО “Раз-два”",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet" +
                "animi aperiam consequatur eveniet impedit, ipsum laudantium maiores nesciunt" +
                "nisi non odit quam qui quibusdam quis rerum suscipit veritatis! Lorem ipsum" +
                "dolor sit amet, consectetur adipisicing elit. Asperiores consequatur cupiditate" +
                "dolor fugiat molestiae mollitia nesciunt"
        }
    ]
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state

    }
};

export default feedbackReducer