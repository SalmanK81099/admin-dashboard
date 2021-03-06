import { Button, Form, Input, Radio } from 'antd';

import { Component } from 'react';
const FormItem = Form.Item;

class FormLayoutDemo extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal'
    };
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem label="Form Layout" {...formItemLayout}>
            <Radio.Group
              defaultValue="horizontal"
              onChange={this.handleFormLayoutChange}
            >
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem label="Field A" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem label="Field B" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FormLayoutDemo;
