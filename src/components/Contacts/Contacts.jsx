import React from "react";
import style from "./Contacts.module.css"
import bg from "./../../assets/img/home.png"
import phone from "./../../assets/img/cont_phone.png"
import message from "./../../assets/img/contacts_message.png"
import {Field, reduxForm, reset} from "redux-form";

const Contacts = props => {
    const onSubmit = (formData, dispatch) => {
        //отправка данных на сервер 
        //props.message(formData.firstname, formData.surname, formData.message);
        console.log(formData.firstname, formData.surname, formData.message)
        dispatch(reset("message")); //очистка формы
    };
    return (
        <div className={style.contacts} style={{backgroundImage: `url(${bg})`}}>
            <div className={style.appWrap}>
                <div className={style.left_content}>
                    <h2 className={style.contacts_title}>Связь с нами</h2>
                    <p className={style.contacts_subtitle}>У вас остались вопросы? Напишите нам - мы ответим в ближайшее
                        время!</p>
                    <div className={style.cont_info}>
                        <div className={style.cont_info_item}>
                            <img src={phone} alt=""/>
                            <p>+7 (111) 222-33-44</p>
                        </div>
                        <div className={style.cont_info_item}>
                            <img src={message} alt=""/>
                            <p>order@bu-one.ru</p>
                        </div>
                    </div>

                </div>

                <div className={style.right_content}>
                    <MessageReduxForm onSubmit={onSubmit}/>
                </div>

            </div>
        </div>
    )
};

const MessageForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.form_names}>
                <div className={style.form_first_name}>
                    <p className={style.form_name}>Имя</p>
                    <Field className={style.form_input} component='input' type='text' name='firstname' placeholder='Имя'/>
                </div>
                <div>
                    <p className={style.form_name}>Фамилия</p>
                    <Field className={style.form_input} component='input' type='text' name='surname' placeholder='Фамилия'/>
                </div>
            </div>
            <div className={style.form_message}>
                <p className={style.form_name}>Сообщение</p>
                <Field className={style.form_input + " " + style.form_textarea} component='textarea' type='text' name='message' placeholder='Ваше сообщение'/>
            </div>
            <button className={style.form_button}>Отправить сообщение</button>
        </form>
    )
};
const MessageReduxForm = reduxForm({form: 'message'})(MessageForm);

export default Contacts