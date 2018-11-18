import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TopicWrapper,TopicItem } from '../style';

class Topic extends Component {

    render() {
        const { list } = this.props;
        
        return (
            <TopicWrapper>
                {/* <TopiceItem>
                    <img className='topic-img' src='//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'></img>
                    qqqqqq
                </TopiceItem> */}

                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img className='topic-img' src={item.get('imgUrl')} alt=''></img>
                            { item.get('title') }
                        </TopicItem>
                    ))
                }

            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // list: state.get('home').get('list')
        list: state.getIn(['home','list'])
    }
}

export default connect(mapStateToProps,null)(Topic);