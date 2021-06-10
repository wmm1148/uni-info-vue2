// import Mock from 'mockjs'
import Mock from 'router-mock'
import { Random } from 'mockjs';

const list = [
  {
    id: '01',
    bookName: '小红书',
    content: '是一本好书',
  },
  {
    id: '02',
    bookName: '小蓝书',
    content: '是是是是是一本好书',
  },
]

// Mock.get(`/get/student/list?page=${page}&limit=${size}`, () => {
Mock.get('/get/book/list', () => {
  console.log('mockkkkkk');
  return Promise.resolve({
    code: 1,
    data: {
      list,
      total: list.length
    }
  })
})

Mock.get('/get/captcha.jpg', () => {
  console.log('captchacaptchamockkkkkk');
  const imgSrc = Random.image('60x32', '#' + Random.string('number', 6), '#ffffff', Random.string('abcdefghijklmnpqrstuvwxyz123456789', 6))

  return Promise.resolve({
    code: 1,
    data: {
      data: imgSrc,
    }
  })
})
