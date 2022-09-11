import React, { memo } from "react";
import "./Footer.scss";
import icon1 from "../../images/icons/snsicon-01@2x.png";
import icon2 from "../../images/icons/snsicon-02@2x.png";
import icon3 from "../../images/icons/snsicon-03@2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main-content">
          <div className="footer-main-content-left">
            <h4 className="title">what happened</h4>
            <ul className="menu-options">
              <li className="menu-item">
                <a href="#">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
              <li className="menu-item">
                <a href="#">[공지] 29CM 강남 스토어 영업 종료</a>
              </li>
              <li className="menu-item">
                <a href="#">[공지] [공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
              <li className="menu-item">
                <a href="#">[공지] iOS 10 이하 버전 지원 중단 안내</a>
              </li>
              <li className="menu-item">
                <a href="#">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
              </li>
            </ul>
          </div>
          <div className="footer-main-content-right">
            <div className="row">
              <div className="col">
                <h4 className="title">about us</h4>
                <ul>
                  <li>회사 소개</li>
                  <li>인재 채용</li>
                  <li>상시 할인 혜택</li>
                </ul>
              </div> <div className="col">
                <h4 className="title">my order</h4>
                <ul>
                  <li>회사 소개</li>
                  <li>인재 채용</li>
                  <li>상시 할인 혜택</li>
                </ul>
              </div> <div className="col">
                <h4 className="title">my account</h4>
                <ul>
                  <li>회사 소개</li>
                  <li>인재 채용</li>
                  <li>상시 할인 혜택</li>
                </ul>
              </div>
              <div className="col">
                <h4 className="title">help</h4>
                <ul>
                  <li>회사 소개</li>
                  <li>인재 채용</li>
                  <li>상시 할인 혜택</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-content">
          <div className="footer-bottom-content-left">
            <span>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr</span>
            <span>서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</span>
          </div>
          <div className="footer-bottom-content-right">
            <ul className="list-icons">
              <li className="item-icon"><img srcSet={`${icon1} 2x`} alt="icon1"/></li>
              <li className="item-icon"><img srcSet={`${icon2} 2x`} alt="fb" /></li>
              <li className="item-icon"><img srcSet={`${icon3} 2x`} alt="yt" /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
