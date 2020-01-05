import React, { useState } from 'react';
import ListComponent from './ListComponent';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;
const { SubMenu } = Menu;

type filterProps = {
  loaded: boolean
}

const FilterComponent: React.FC<filterProps> = ({ loaded }) => {

  const [gender, setGender] = useState("FEMALE");
  const [age, setAge] = useState("SENIOR");
  const [size, setSize] = useState("XL");

  return (
    <Layout>
      <Header style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          background: '#ffffff'
        }}>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '63px' }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>Gender</span>
            }
          >
            <Menu.Item key="1" onClick={() => setGender("MALE")}>
            <Icon type="man" />
              MALE
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setGender("FEMALE")}>
              <Icon type="woman" />
              FEMALE
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="hourglass" />
                <span>Age</span>
              </span>
            }
          >
            <Menu.Item key="3" onClick={() => setAge("BABY")}>
              BABY
            </Menu.Item>
            <Menu.Item key="4" onClick={() => setAge("YOUNG")}>
              YOUNG
            </Menu.Item>
            <Menu.Item key="5" onClick={() => setAge("ADULT")}>
              ADULT
            </Menu.Item>
            <Menu.Item key="6" onClick={() => setAge("SENIOR")}>
              SENIOR
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="column-height" />
                <span>Size</span>
              </span>
            }
          >
            <Menu.Item key="7" onClick={() => setSize("S")}>
              S
            </Menu.Item>
            <Menu.Item key="8" onClick={() => setSize("M")}>
              M
            </Menu.Item>
            <Menu.Item key="9" onClick={() => setSize("L")}>
              L
            </Menu.Item>
            <Menu.Item key="10" onClick={() => setSize("XL")}>
              XL
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <ListComponent gender={ gender } age={ age } size={ size } loaded={ loaded } />
    </Layout>
  )
}

export default FilterComponent;
