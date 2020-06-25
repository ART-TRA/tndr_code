import React from "react";
import style from "./Header.module.css"
import {connect} from "react-redux";
import logo from "./../../assets/img/logo.png"
import {NavLink} from "react-router-dom";


const Header = props => {
    let headerItems = props.items.map(i => <div key={i.id} className={style.header_info_item}>
        <div className={style.header_info_item_img} style={{backgroundImage: `url(${i.image})`}}/>
        <div className={style.header_info_item_text}>{i.text}</div>
    </div>);
    return (
        <div className={style.header}>
            <div className={style.appWrap}>
                <div className={style.header_logo}>
                    <img className={style.header_logo_img} src={logo} alt=""/>
                    <p className={style.header_logo_text}>BuhOne</p>
                </div>
                <div className={style.header_content}>
                    <div className={style.header_info}>
                        {headerItems}
                    </div>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
};

const Navbar = props => {
  return (
      <nav className={style.header_menu}>
          <div className={style.menu_item}>
              <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/home">Главная</NavLink>
          </div>
          <div className={style.menu_item}>
              <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/services">Услуги</NavLink>
          </div>
          <div className={style.menu_item}>
              <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/keys">Кейсы</NavLink>
          </div>
          <div className={style.menu_item}>
              <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/about">О компании</NavLink>
          </div>
          <div className={style.menu_item}>
              <NavLink className={style.menu_item_link} activeClassName={style.active_item} to="/contacts">Контакты</NavLink>
          </div>
      </nav>
  )
};
const mapStateToProps = state => ({
    items: state.header.items
});

export default connect(mapStateToProps, {})(Header)