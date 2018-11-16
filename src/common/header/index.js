import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper,Action, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Header extends Component {
    
    render() {
        const { focused, handleInputBlur, handleInputFocus} = this.props;
        return(
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <NavItem className='right'>登录</NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={350}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''} 
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                            <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe614;</i>

                            { this.getSearchArea() }

                    </SearchWrapper>

                    <Action>
                        <Button className='reg'>注册</Button>
                        <Button className='writting'><i className='iconfont'>&#xe615;</i>写文章</Button>
                    </Action>
                </Nav>
            </HeaderWrapper>
        )
    }

    getSearchArea() {
        const { focused, list } = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {list.map((item) => {
                            return (
                                <SearchInfoItem key={item}>
                                    {item}
                                </SearchInfoItem>
                            )
                        })}
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
        list: state.getIn(['header','list'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            dispatch(actionCreators.searchFocusAction());
            dispatch(actionCreators.getList());
        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlurAction());
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);