import styled from 'styled-components';

export const Homewrapper = styled.div`
    width: 960px;
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
    width: 240px;
    float: right;
    margin-right:45px;
    padding-top: 30px;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left: -18px;
`;

export const TopiceItem = styled.div`
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