import React from "react";
import style from "./Feedback.module.css"
import Paginator from "../common/Paginator/Paginator";
import {connect} from "react-redux";

const Feedback = props => {
    let clients = props.clients.filter(c => c.id === 1)
        .map(c => <FeedbackItem key={c.id} {...c}/>);
    return (
        <div className={style.feedback}>
            <div className={style.appWrap}>
                <h3 className={style.feedback_subtitle}>Отзывы</h3>
                <h2 className={style.feedback_title}>Ваши благодарности</h2>
                <div>
                    {clients}
                </div>
                <Paginator color="blue"/>
            </div>
        </div>
    )
};

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
export default connect(mapStateToProps,{})(Feedback)