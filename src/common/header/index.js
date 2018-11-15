import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper,Action, Button } from './style'
import { connect } from 'react-redux';

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
        focused: state.header.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus: () => {
            const action = {
                type: 'search_focus_type'
            }
            dispatch(action);
        },
        handleInputBlur: () => {
            const action = {
                type: 'search_blur_type'
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);