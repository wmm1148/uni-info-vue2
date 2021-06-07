const studentTableColumns = [
  // {
  //   dataIndex: 'id',
  //   title: 'Id'
  // },
    {
    dataIndex: 'name',
    title: 'Name'
  }, {
    dataIndex: 'age',
    title: 'Age'
  },
  {
    dataIndex: 'gender',
    title: 'Gender'
  }, {
    dataIndex: 'major',
    title: 'Major'
  },
  {
    dataIndex: 'status',
    title: 'Studying Now'
  }
  // {
  //   title: 'action',
  //   scopedSlots: {
  //     customRender: 'action',
  //   },
  // }
]

const eliteTableColumns = [
  // {
  //   dataIndex: 'id',
  //   title: 'Id'
  // },
    {
    dataIndex: 'name',
    title: 'Name'
  }, {
    dataIndex: 'age',
    title: 'Age'
  },
  {
    dataIndex: 'gender',
    title: 'Gender'
  }, {
    dataIndex: 'major',
    title: 'Major'
  }
  // {
  //   title: 'action',
  //   scopedSlots: {
  //     customRender: 'action',
  //   },
  // }
]
const name = {
  dataIndex: 'name',
  title: 'Name',
  // scopedSlots: {
  //   customRender: 'name',
  // },
};
const age = {
  dataIndex: 'age',
  title: 'Age',
  scopedSlots: {
    customRender: 'age',
  },
  width:200,
};
const gender = {
  dataIndex: 'gender',
  title: 'Gender',
  // scopedSlots: {
  //   customRender: 'gender',
  // },

};
const remark = {
  dataIndex: 'remark',
  title: 'Remark',
  // scopedSlots: {
  //   customRender: 'remark',
  // },
  width:400,
};
const major = {
  dataIndex: 'major',
  title: 'Major',
  // scopedSlots: {
  //   customRender: 'major',
  // },
};
const status = {
  dataIndex: 'status',
  title: 'Status',
  // scopedSlots: {
  //   customRender: 'status',
  // },
};

export { studentTableColumns, eliteTableColumns };

export const eliteStuColumns = [ name, gender, major, status, age, remark ];