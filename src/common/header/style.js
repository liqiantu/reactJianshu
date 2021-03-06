import styled from 'styled-components';
import logoPic from '../../statics/navLog.png';

export const HeaderWrapper = styled.div`
    z-index: 1;
    position:relative;
    height: 56px;
    border-bottom:1px solid #f0f0f0;
`;

// export const Logo = styled.a.attrs({
//     href:'/'
// })`
//     position:absolute;
//     top: 0;
//     left: 0;
//     width: 100px;
//     height: 56px;
//     display: block;
//     background: url(${logoPic});
//     background-size: contain;
// `;

export const Logo = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    display: block;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;

    padding-right: 70px;
    box-sizing: border-box;
    /* background: yellow; */
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;

    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 40px 0 10px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    /* 同级需要添加& */
    &.slide-enter {
        transition: all .35s ease-out;
    }
    &.slide-enter-active {
        width: 240px
    }
    &.slide-exit {
        transition: all .35s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 22px;
    top: 56px;
    /* height: 100px; */
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: white;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #969696;
    cursor: pointer;

    .spin {
        font-size: 12px;
        margin-right:4px;
    }
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    padding: 0 5px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right:10px;
    margin-bottom: 15px;
`;

export const Action = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149; 
    }
`;

