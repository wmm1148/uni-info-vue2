// import Mock from 'mockjs'
import Mock from 'router-mock'
import { Random } from 'mockjs';
import api from '../api.js'

const list = [
  {
    id: '01',
    name: '张三',
    age: 20,
    gender: '男',
    major: '计算机科学与技术',
    status: 0, //1,在读  0，非在读
    elite: 0,
    remark: 'hh',
    img: '/avatar2.jpg',
  },
  {
    id: '02',
    name: '老王',
    age: 25,
    gender: '男',
    major: '金融学',
    status: 0,
    elite: 0,
    remark: 'hhh优秀h',
    img: '/avatar2.jpg',

  },
  {
    id: '03',
    name: '李四',
    age: 22,
    gender: '男',
    major: '会计学',
    status: 1,
    elite: 0,
    remark: 'hhh优秀h',
    img: '/avatar2.jpg',


  },
  {
    id: '04',
    name: '赵六',
    age: 22,
    gender: '男',
    major: '物流管理',
    status: 1,
    elite: 0,
    remark: 'hhh优秀h',
    img: '/avatar2.jpg',


  },
  {
    id: '05',
    name: '张梅',
    age: 20,
    gender: '女',
    major: '计算机科学与技术',
    status: 1,
    elite: 0,
    remark: 'hhh优秀h',
    img: '/avatar2.jpg',


  },
  {
    id: '06',
    name: '老梅',
    age: 25,
    gender: '女',
    major: '金融学',
    status: 0,
    elite: 1,
    remark: 'hh',
    img: '/avatar2.jpg',


  },
  {
    id: '07',
    name: '李梅',
    age: 22,
    gender: '女',
    major: '会计学',
    status: 1,
    elite: 0,
    remark: 'hh',
    img: '/avatar2.jpg',


  },
  {
    id: '081',
    name: '赵梅2',
    age: 22,
    gender: '女',
    major: '物流管理',
    status: 1,
    elite: 0,
    remark: 'hh优秀',
    img: '/avatar2.jpg',


  },
  {
    id: '08',
    name: '赵梅3',
    age: 22,
    gender: '女',
    major: '物流管理',
    status: 1,
    elite: 1,
    remark: 'hhhh优秀',
    img: '/avatar2.jpg',


  },
  {
    id: '09',
    name: '赵梅4',
    age: 22,
    gender: '女',
    major: '物流管理',
    status: 1,
    elite: 0,
    remark: 'hhh优秀h',
    img: '/avatar2.jpg',


  },
  {
    id: '10',
    name: '赵梅5',
    age: 22,
    gender: '女',
    major: '物流管理',
    status: 1,
    elite: 1,
    remark: 'hhh优秀h',
    img: '/avatar2.jpg',


  },
  {
    id: '11',
    name: '赵梅6',
    age: 22,
    gender: '女',
    major: '物流管理',
    status: 1,
    elite: 1,
    remark: 'hh',
    img: '/avatar2.jpg',


  }
]

const majorList = [
  {
    code: 0,
    title: '计算机科学与技术',
    alias: 'CS'
  },
  {
    code: 1,
    title: '金融学',
    alias: '金融'
  },
  {
    code: 2,
    title: '会计学',
    alias: '会计'
  },
  {
    code: 3,
    title: '财务管理',
    alias: '财管'
  },
  {
    code: 4,
    title: '物流管理',
    alias: '物管'
  }
]

const accountInfo = {
  username: 'mandy',
  telephone: '15201900032',
  email: 'janet.wang@lingyue-digital.com',
  department: 'CIS-13',
  mobile: '+86 13000000000',
  authType: 'local'
}

// Mock.get(`/get/student/list?page=${page}&limit=${size}`, () => {
Mock.get('/get/student/list', () => {
  // console.log(page, limit)
  // const result = list.slice((page - 1) * limit, page * limit)
  // const res = list.find((item) => item.id === (page + size));
  return Promise.resolve({
    code: 1,
    data: {
      list,
      total: list.length
    }
  })
  // return {
  //   code: 0,
  //   data: {
  //     list,
  //     total: list.length
  //   }
  // }
})

Mock.get('/get/student/by/:id', id => {
  console.log('id',id);
  const old = list.find((item) => item.id === id)
  console.log('old',old);
  return {  
    code: 0,
    data: old
  }
})

Mock.delete('/remove/student/:id', id => {
  console.log('mock id', id);
  const oldIndex = list.findIndex((item) => item.id === id)
  list.splice(oldIndex, 1)
  return {
    code: 0,
    data: {
      list,
      total: list.length
    }
  }
})

Mock.post(api.addStudent.url, (stu) => {
  if (!stu.id) {
    stu.id = Mock({ id: '@id' }).id
  }
  list.push(stu)
  return {
    code: 0,
    data: {
      list,
      total: list.length
    }
  }
})

Mock.put('/update/student', (stu) => {
  const oldIndex = list.findIndex((item) => item.id === stu.id)
  list.splice(oldIndex, 1, stu)
  return {
    code: 0,
    data: {
      list,
      total: list.length
    }
  }
})

Mock.get(api.getAccountInfo.url, () => ({
  code: 0,
  data: accountInfo
}))

Mock.get(api.getMajorList.url, () => ({
  code: 0,
  data: majorList
}))

//这里写成api.changeStuStatus.url就不行,api那边是函数就不能
Mock.put('/put/student/changeStatus/:id', (id) => {
  const dataIndex = list.findIndex((item) => item.id === id)
  list[dataIndex].status = list[dataIndex].status === 0 ? 1 : 0;
  return {  
    code: 0,
    data: list
  }
})

Mock.get('/get/eliteStudent/list', () => {
  // console.log(page, limit)
  // const result = list.slice((page - 1) * limit, page * limit)
  const eliteList = list.filter((item) => item.elite === 1);
  return Promise.resolve({
    code: 0,
    data: {
      list: eliteList,
      total: list.length
    }
  })
})

// const uuid = '12345';

Mock.post('/post/captcha', data => {
  console.log('uuid mockkkk  post', data);
  const imgSrc = Random.image('1200x820', '#' + Random.string('number', 6), '#ffffff', Random.string('abcdefghijklmnpqrstuvwxyz123456789', 6))

  return Promise.resolve({
    code: 1,
    data: {
      data: imgSrc,
    }
  })
})

Mock.get('/get/captcha', data => {
  console.log('uuid mockkkkk  get', data);
  const imgSrc = Random.image('2400x820', '#' + Random.string('number', 6), '#ffffff', Random.string('abcdefghijklmnpqrstuvwxyz123456789', 6))

  return Promise.resolve({
    code: 1,
    data: {
      data: imgSrc,
    }
  })
})

