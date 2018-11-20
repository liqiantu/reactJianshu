import React, { PureComponent } from 'react';
import List from './component/List';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Homewrapper, HomeRight, HomeLeft, ToTopButton } from  './style';

class Home extends PureComponent {

    render() {
        const { showScroll } = this.props;
        return (<div>
            <Homewrapper>
            <HomeLeft>
                <img src='https://upload.jianshu.io/admin_banners/web_images/4577/353c8d29771d3c5c0bfbe92556fb65da78d3f3da.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>

                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </Homewrapper>
            
            { showScroll ? <ToTopButton onClick={ this.handleScrollTop }> ^ </ToTopButton> : null}

        </div>);
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvent();
    }

    componentWillUnmount() {
        this.removeEvent();
    }

    handleScrollTop() {
        window.scrollTo(0,0);
    }

    bindEvent() {
        window.addEventListener('scroll',this.props.changeScrollShow);
    }

    removeEvent() {
        window.removeEventListener('scroll',this.props.changeScrollShow);
    }
}

const mapState = (state) => {
    return {
        showScroll:state.getIn(['home','showScroll'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData: () => {
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollShow: () => {
            // console.log(document.documentElement.scrollTop);
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleScrollShow(true));
            }else {
                dispatch(actionCreators.toggleScrollShow(false));
            }
        }
    }
};

export default connect(mapState,mapDispatch)(Home);