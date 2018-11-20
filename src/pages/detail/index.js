import React, { PureComponent } from 'react';
import { DetailWrapper, DetailHeader, DetailContent } from './style';

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <DetailHeader>
                    预算2000元左右买什么手机，这五款手机性能爆表
                </DetailHeader>

                <DetailContent>
                    <p>
                        手机行业的竞争非常激烈，促使厂商推出更优秀更廉价的手机，在目前的两千元档，有着一大批有旗舰机配置、做工出色、设计精美的手机供我们选择，突出的是性价比，也是学生、刚参加工作、手头钱不多的人的首选。

                        在两千元的价位，实用和性能是比较重要的，所以在配置上，一般不会输给品牌的旗舰机，这是带来良好体验的基础，甚至在某些方面，会超过旗舰机。
                    </p>

                    <img src='https://upload-images.jianshu.io/upload_images/643771-9a641e51ff9cae65?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp'></img>

                </DetailContent>
            </DetailWrapper>
        );
    }
}

export default Detail;