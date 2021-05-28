// import Mock from 'mockjs'
import Mock from 'router-mock'
import api from '../api.js'

const list = [
  {
    id: '01',
    name: '张三',
    age: 20,
    gender: '男',
    major: '计算机科学与技术'
  },
  {
    id: '02',
    name: '老王',
    age: 25,
    gender: '男',
    major: '金融学'
  },
  {
    id: '03',
    name: '李四',
    age: 22,
    gender: '男',
    major: '会计学'
  },
  {
    id: '04',
    name: '赵六',
    age: 22,
    gender: '男',
    major: '物流管理'
  },
  {
    id: '05',
    name: '张梅',
    age: 20,
    gender: '女',
    major: '计算机科学与技术'
  },
  {
    id: '06',
    name: '老梅',
    age: 25,
    gender: '女',
    major: '金融学'
  },
  {
    id: '07',
    name: '李梅',
    age: 22,
    gender: '女',
    major: '会计学'
  },
  {
    id: '081',
    name: '赵梅2',
    age: 22,
    gender: '女',
    major: '物流管理'
  },
  {
    id: '08',
    name: '赵梅3',
    age: 22,
    gender: '女',
    major: '物流管理'
  },
  {
    id: '09',
    name: '赵梅4',
    age: 22,
    gender: '女',
    major: '物流管理'
  },
  {
    id: '10',
    name: '赵梅5',
    age: 22,
    gender: '女',
    major: '物流管理'
  },
  {
    id: '11',
    name: '赵梅6',
    age: 22,
    gender: '女',
    major: '物流管理'
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
  console.log(2222)
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
  console.log('iiiidddddddddddddddddddd');
  const old = list.find((item) => item.id === id)
  console.log('old',old);
  return {  
    code: 0,
    data: old
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

Mock.put(api.updateStudent.url, (stu) => {
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

Mock.delete(api.removeStudent.url, (stu) => {
  const oldIndex = list.findIndex((item) => item.id === stu.id)
  list.splice(oldIndex, 1)
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
