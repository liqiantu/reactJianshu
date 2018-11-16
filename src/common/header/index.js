import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper,Action, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { connect } from 'react-redux';
import { actionCreators } from './store'

const getSearchArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>11111</SearchInfoItem>
                    <SearchInfoItem>11111</SearchInfoItem>
                    <SearchInfoItem>11111</SearchInfoItem>
                    <SearchInfoItem>11111</SearchInfoItem>
                    <SearchInfoItem>11111</SearchInfoItem>
                    <SearchInfoItem>11111</SearchInfoItem>
                    <SearchInfoItem>11111</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    }else {
        return null;
    }
}

class Header extends Component {
    
    render() {
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
                            in={this.props.focused}
                            timeout={350}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.props.focused ? 'focused' : ''} 
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                            <i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe614;</i>

                            { getSearchArea(this.props.focused) }
                            
                    </SearchWrapper>

                    <Action>
                        <Button className='reg'>注册</Button>
                        <Button className='writting'><i className='iconfont'>&#xe615;</i>写文章</Button>
                    </Action>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            dispatch(actionCreators.searchFocusAction());
        },
        handleInputBlur: () => {
            dispatch(actionCreators.searchBlurAction());
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);