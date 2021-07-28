// 公共组件相关的mock在这里
import Mock from 'router-mock'
import { Random } from 'mockjs';

// const uuid = '12345';

Mock.post('/post/captcha', data => {
  console.log('uuid mockkkk  post', data);
  // console.log(data);
  const imgSrc = Random.image('800x420', '#' + Random.string('number', 6), '#ffffff', Random.string('abcdefghijklmnpqrstuvwxyz123456789', 6))
  return Promise.resolve({
    code: 1,
    data: {
      data: imgSrc,
    }
  })
})

Mock.get('/get/captcha', () => {
  console.log('get captcha');
  const imgSrc = Random.image('800x420', '#' + Random.string('number', 6), '#ffffff', Random.string('abcdefghijklmnpqrstuvwxyz123456789', 6))
  return Promise.resolve({
    code: 1,
    data: {
      data: imgSrc,
    }
  })
})
