import styled from 'styled-components';

export const Homewrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;

    img {
        width: 625px;
        height: 240px;
    }
`;

export const HomeRight = styled.div`
    height: 150px;
    width: 280px;
    float: right;
    margin-right:45px;
    padding-top: 30px;
`;

// topic 布局
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-img {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;
// topic 布局

// list 布局
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
// list 布局

// recommend布局
export const RecommendWrapper = styled.div`
    /* margin: 30px 0; */
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => (props.imgUrl)});
    background-size: contain;
`;
// recommend布局

// writer布局
export const WriterWrapper = styled.div`
    margin-top: 20px;
    border: 1px solid #dcdcdc;
    width: 280px;
    height: 280px;
    line-height: 280px;
    text-align: center;
    border-radius: 3px;
`;
// writer布局

// 获取更多布局
export const LoadMore = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 40px;
    background: #a5a5a5;
    color: #fff;
    border-radius: 20px;
    text-align:center;
    line-height: 40px;
    cursor: pointer;
`;
// 获取更多布局