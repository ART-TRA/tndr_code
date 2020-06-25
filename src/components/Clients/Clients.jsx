import React from "react";
import style from "./Clients.module.css"
import {connect} from "react-redux";
import Carousel from 'react-elastic-carousel';
import dot from "./../../assets/img/dot.png"
import Paginator from "../common/Paginator/Paginator";

const Clients = props => {
    let clients = props.clients.map(c => <div className={style.client} key={c.id}
                                              style={{backgroundImage: `url(${c.image})`}}/>);
    return (
        <div className={style.clients}>
            <div className={style.appWrap}>
                <h3 className={style.clients_subtitle}>Наши клиенты</h3>
                <h2 className={style.clients_title}>С нами работают</h2>
                <div className={style.clients_content}>
                    {clients}
                </div>
                <Paginator color="blue"/>
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
    clients: state.clients.clients
});
export default connect(mapStateToProps, {})(Clients)