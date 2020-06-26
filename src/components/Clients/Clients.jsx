import React, {Component} from "react";
import style from "./Clients.module.css"
import {connect} from "react-redux";
import Carousel from "react-elastic-carousel";
import Paginator from "../common/Paginator/Paginator";

class Clients extends Component {
    render() {
        let clients = this.props.clients.map(c => <div className={style.client} key={c.id}
                                                       style={{backgroundImage: `url(${c.image})`}}/>);
        return (
            <div className={style.clients}>
                <div className={style.appWrap}>
                    <h3 className={style.clients_subtitle}>Наши клиенты</h3>
                    <h2 className={style.clients_title}>С нами работают</h2>

                    <div className={style.clients_content}>
                        {/*здесь созд-ся ссылка на слайдер*/}
                        <Carousel ref={ref => (this.carousel = ref)}
                                  showArrows={false}
                                  itemsToShow={4}
                                  pagination={false}>
                            {clients}
                        </Carousel>
                        {/*используя ссылку на слайдер, можно обратиться к методам перелистывания и передать их на свои кнопки*/}
                        <Paginator color="blue" slidePrev={() => this.carousel.slidePrev()} slideNext={() => this.carousel.slideNext()}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clients: state.clients.clients
});
export default connect(mapStateToProps, {})(Clients)