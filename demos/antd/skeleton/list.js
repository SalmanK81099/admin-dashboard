import { Avatar, Icon, List, Skeleton, Switch } from 'antd';

import { Component } from 'react';
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class App extends Component {
  state = {
    loading: false
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                !loading && [
                  <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text="156" />,
                  <IconText type="message" text="2" />
                ]
              }
              extra={
                !loading && (
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default App;
