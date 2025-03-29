import { Flex, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CoinTitle from './CoinTitle';

function CoinInfo({ coin, onBack }) {
    return (
        <Flex align="center" justify="space-between">
            <Space>
                <ArrowLeftOutlined
                    onClick={onBack}
                    style={{ cursor: 'pointer', fontSize: '18px' }}
                />
                <CoinTitle coin={coin} />
            </Space>
        </Flex>
    );
}

export default CoinInfo;
