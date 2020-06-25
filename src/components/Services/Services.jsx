import React from "react";
import style from "./Services.module.css"
import {connect} from "react-redux";

const Services = props => {
    let servCards = props.servicesCards.map(c => <ServCard key={c.id} {...c}/>);
    return (
        <div className={style.services}>
            <div className={style.appWrap}>
                <h3 className={style.services_subtitle}>Наши услуги</h3>
                <h2 className={style.services_title}>Мы специализируемся</h2>
                <div className={style.serv_cards}>
                    {servCards}
                </div>
            </div>
        </div>
    )
};

export const ServCard = props => {
    return (
        <div className={style.serv_card} style={{backgroundImage: `url(${props.image})`}}>
            <div className={style.serv_card_bg}>
                <h3 className={style.serv_card_title}>{props.title}</h3>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    servicesCards: state.services.servicesCards
});
export default connect(mapStateToProps, {})(Services)