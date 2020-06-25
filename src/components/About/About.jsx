import React from "react";
import style from "./About.module.css"
import {connect} from "react-redux";

const About = props => {
    let cards = props.aboutCards.map(c =><AboutCard key={c.id} {...c}/>);
    return (
        <div className={style.about}>
            <div className={style.appWrap}>
                <div className={style.about_content}>
                    <h3 className={style.about_subtitle}>О нас</h3>
                    <h2 className={style.about_title}>Компания <span>ИвановПром</span></h2>
                    <p className={style.about_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet
                        animi aperiam consequatur eveniet impedit, ipsum laudantium maiores nesciunt
                        nisi non odit quam qui quibusdam quis rerum suscipit veritatis! Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Asperiores consequatur cupiditate
                        dolor fugiat molestiae mollitia nesciunt officiis quasi sed sunt? A cumque eius
                        expedita explicabo laborum maxime minus praesentium vero.</p>
                </div>
                <div className={style.cards_content}>
                    {cards}
                </div>
            </div>
        </div>
    )
};

export const AboutCard = props => {
    return (
        <div className={style.card}>
            <h2>{props.title}</h2>
            <p className={style.card_text}>{props.subtitle}</p>
            <p className={style.card_textLink + " " + style.card_text}>{props.textLink}</p>
        </div>
    )
};

const mapStateToProps = state => ({
    aboutCards: state.about.aboutCards
});
export default connect(mapStateToProps,{})(About)