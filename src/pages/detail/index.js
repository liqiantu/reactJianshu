import React, { PureComponent } from 'react';
import { DetailWrapper, DetailHeader, DetailContent } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render() {
        const { title, content} = this.props;
        return (
            <DetailWrapper>
                <DetailHeader>
                    { title }
                </DetailHeader>

                <DetailContent dangerouslySetInnerHTML={{ __html:content }} />
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getArticle(this.props.match.params.id);
    }
}

const mapState = (state) => {
    return {
        title: state.getIn(['detail','title']),
        content: state.getIn(['detail','content'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getArticle: (id) => {
            dispatch(actionCreators.getArticleAction(id));
        }
    }
}

export default connect(mapState,mapDispatch)(withRouter(Detail));