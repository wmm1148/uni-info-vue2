import Mock from 'router-mock'
import { Random } from 'mockjs';

const list = [
  {
    id: '01',
    property: 'count',
    description: '字数统计，配合字数限制会显示0/0的样式',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '02',
    property: 'readOnly',
    description: '是否只读状态',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '03',
    property: 'copyAll',
    description: '一键复制输入框内所有文字',
    type: 'boolean',
    default: 'false',
  },
]

const mockData = [
  {
    value: 'china',
    label: 'China',
  },
  {
    value: 'usa',
    label: 'USA',
  },
  {
    value: 'japan',
    label: 'Japan',
  }
]

Mock.get('/get/inputAPIData', () => {
  console.log('object');
  return Promise.resolve({
    code: 1,
    data: {
      list,
      total: list.length
    }
  })
})

Mock.post('/post/captcha', data => {
  // console.log('uuid mockkkk  post', data);
  console.log(data);
  const imgSrc = Random.image('800x420', '#' + Random.string('number', 6), '#ffffff', Random.string('abcdefghijklmnpqrstuvwxyz123456789', 6))
  return Promise.resolve({
    code: 1,
    data: {
      data: imgSrc,
    }
  })
})

Mock.get('/get/captcha', () => {
  const imgSrc = Random.image('800x420', '#' + Random.string('number', 6), '#ffffff', Random.string('abcdefghijklmnpqrstuvwxyz123456789', 6))
  return Promise.resolve({
    code: 1,
    data: {
      data: imgSrc,
    }
  })
})

Mock.get('/get/netSelectData', () => {
  console.log('get netSelectData');
  return Promise.resolve({
    code: 1,
    data: {
      data: mockData,
    }
  })
})