import './App.less';

import { Layout, Menu, Typography, Col, Divider, Table } from 'antd';
import Icon, { UserOutlined, DatabaseOutlined, SettingOutlined } from '@ant-design/icons';

import { RageLogo } from './RageLogo';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text, Link } = Typography;
const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

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
        <Table dataSource={data}>
          <Column title="Function name" dataIndex="firstName" key="firstName" />
          <Column title="Execution time" dataIndex="lastName" key="lastName" />
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