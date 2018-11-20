import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper,Action, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as logInActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom'

class Header extends PureComponent {
    
    render() {
        const { focused, handleInputBlur, handleInputFocus, list, login, handleLogOut} = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    { login ? <NavItem className='right' onClick={ handleLogOut }>注销</NavItem> : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>}

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={350}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''} 
                                onFocus={() => {
                                    handleInputFocus(list);
                                }}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                            <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe614;</i>
                            { this.getSearchArea() }
                    </SearchWrapper>

                    <Action>
                        { login ? null : <Button className='reg'>注册</Button> }
                        <Button className='writting'><i className='iconfont'>&#xe615;</i>写文章</Button>
                    </Action>
                </Nav>
            </HeaderWrapper>
        )
    }

    getSearchArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;

        const tempList = list.toJS();
        const pageList = [];

        if (tempList.length) {
            for (let i = (page - 1) * 10 ; i < page * 10; i++ ) {
                // 判断 是否存在内容
                if (tempList[i]) {
                    pageList.push(
                        <SearchInfoItem key={tempList[i]}>{tempList[i]}</SearchInfoItem>
                    )
                }
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => {
                                handleChangePage(page,totalPage)
                            }}
                        >
                        <i className='iconfont spin'>&#xe851;</i>
                        换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        mouseIn: state.getIn(['header','mouseIn']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','isLogIn'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus: (list) => {
            console.log(list);
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocusAction());
        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlurAction());
        },
        handleMouseEnter: () => {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave: () => {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage: (page,totalPage) => {
            console.log('handleChangePage');
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        },
        handleLogOut: () => {
            dispatch(logInActionCreators.logOut());
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);