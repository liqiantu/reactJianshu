import styled from 'styled-components';
import logoPic from '../../statics/navLog.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height: 56px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    display: block;
    background: url(${logoPic});
    background-size: contain;
`;