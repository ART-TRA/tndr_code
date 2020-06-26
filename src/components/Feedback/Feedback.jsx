import React, {Component} from "react";
import style from "./Feedback.module.css"
import Paginator from "../common/Paginator/Paginator";
import {connect} from "react-redux";
import Carousel from "react-elastic-carousel";

class Feedback extends Component {
    render() {
        let clients = this.props.clients
            .map(c => <FeedbackItem key={c.id} {...c}/>);
        return (
            <div className={style.feedback}>
                <div className={style.appWrap}>
                    <h3 className={style.feedback_subtitle}>Отзывы</h3>
                    <h2 className={style.feedback_title}>Ваши благодарности</h2>
                    <Carousel className={style.carousel} ref={ref => (this.carousel = ref)}
                              showArrows={false}
                              itemsToShow={1}
                              pagination={false}>
                        {clients}
                    </Carousel>
                    <Paginator color="blue" slidePrev={() => this.carousel.slidePrev()}
                               slideNext={() => this.carousel.slideNext()}/>
                </div>
            </div>
        )
    }
}

const FeedbackItem = props => {
    return (
        <div className={style.feedback_content}>
            <div className={style.feedback_content_wrap}>
                <p className={style.feedback_content_text}>{props.text}</p>
                <div className={style.person_info}>
                    <div className={style.feedback_content_image} style={{backgroundImage: `url(${props.image})`}}/>
                    <div>
                        <p className={style.feedback_content_name}>{props.name}</p>
                        <p className={style.feedback_content_post}>{props.post}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
    clients: state.feedback.clients
});
export default connect(mapStateToProps, {})(Feedback)