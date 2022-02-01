import './App.less';
import React from 'react';
import { Layout, Menu, Typography, Row, Col, Divider, Table, Slider, InputNumber } from 'antd';
import Icon, { UserOutlined, DatabaseOutlined, SettingOutlined } from '@ant-design/icons';

import { RageLogo } from './RageLogo';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text, Link } = Typography;
const { Column } = Table;

const data = [
  {
    key: '1',
    name: 'mp.events.add',
    execution: 20,
    calls: 300,
  }
];

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = (value: number) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

const App = () => (
  <Layout>
    <Header className="header"> 
      <div className="header-logo">
        <Icon component={RageLogo} />
      </div>

      <Col span={6} style={{ marginLeft: 25, lineHeight: 1 }}>
        <Title level={3}>
          JavaScript Performance Monitor
        </Title>

        <Text>
          Server Name
        </Text>
      </Col>
    </Header>
  
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      > 
        <Menu mode="inline" defaultOpenKeys={['client', 'server']}>
          <SubMenu key="client" icon={<UserOutlined />} title="Client">
              <Menu.Item key="client_functions">Functions</Menu.Item>
              <Menu.Item key="client_events">Events</Menu.Item>
            </SubMenu>
            <SubMenu key="server" icon={<DatabaseOutlined />} title="Server">
              <Menu.Item key="server_functions">Functions</Menu.Item>
              <Menu.Item key="server_events">Events</Menu.Item>
              <Menu.Item key="server_info">Info</Menu.Item>
            </SubMenu>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
        </Menu>
      </Sider>

      <Content style={{ background: 'rgb(40, 40, 40)' }}>
        <Text>History time</Text>
        <IntegerStep />

        <Table dataSource={data}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Execution time" dataIndex="execution" key="execution" />
          <Column title="Calls" dataIndex="calls" key="calls" />
        </Table>
      </Content>
    </Layout>

    <Footer style={{textAlign: 'center'}}> 
        <Text type="secondary">brzys#5937</Text>
        <Divider type="vertical" />
        <Link href="https://github.com/brzys/rage-js-monitor-gui" target="_blank">
          GitHub
        </Link>
        <Divider type="vertical" />
        <Link href="https://rage.mp" target="_blank">
          rage.mp
        </Link>
    </Footer>
  </Layout>
);

export default App;