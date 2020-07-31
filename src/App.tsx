import React, { Component } from 'react';
import { Table, Tooltip, Button, Popconfirm } from 'antd';
import './App.less'

const columns = [
  {
    title: '课程名称',
    dataIndex: 'curriculum_name',
    key: 'curriculum_name'
  },
  {
    title: '课程描述',
    dataIndex: 'describe',
    key: 'describe',
    align: 'center' as 'center',
    onCell: () => {
      return {
        style: {
          maxWidth: 300,
          overflow: 'hidden',
          whiteSpace: 'nowrap', // 只要一取消注视就会报错。
          textOverflow:'ellipsis',
          cursor:'pointer'
        } as React.CSSProperties,
      }
    },
  },
  {
    title: '分类',
    dataIndex: 'types',
    key: 'types',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
  },
  {
    title: '有效截至时间',
    dataIndex: 'period_of_validity',
    key: 'period_of_validity',
  },
  {
    title: '评分',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: '浏览人数',
    dataIndex: 'total_see',
    key: 'total_see',
  },
  {
    title: '公开状态',
    dataIndex: 'is_public',
    key: 'is_public',
  },
  {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: '',
    key: '',
  },
];
const data = [
  {
    key: '1',
    curriculum_name: 'John Brown',
    describe: 'JavaScript 是一种非常松散的面向对象语言，也是 Web 开发中极受欢迎的一门语言。JavaScript，尽 管它的语法和编程风格与 Java 都很相似，但它却不是 Java 的“轻量级”版本，甚至与 Java 没有任何关 系。JavaScript 是一种全新的动态语言，它植根于全球数亿网民都在使用的 Web 浏览器之中，致力于增 强网站和 Web 应用程序的交互性。',
    align: 'center'
  }
]
export default class App extends Component {
  render() {
    return (
      <div>
        <Table style={{width: '100%'}} 
        columns={columns}
        dataSource={data} />
      </div>
    )
  }
}

