<template>
  <div>
    <a-form-model>
      <a-row :gutter="16" align="middle">
        <a-col :span="formItemSpan" class="ant-col">
          <a-form-model-item
            :colon="false"
          >
            <a-input placeholder="Please input name" allow-clear/>
          </a-form-model-item>
        </a-col>
        <a-col :span="formItemSpan" class="ant-col">
          <a-form-model-item
            :colon="false"
          >
            <a-input placeholder="Please input age" allow-clear/>
          </a-form-model-item>
        </a-col>
        <a-col :span="formItemSpan" class="ant-col">
          <a-form-model-item
            :colon="false"
          >
            <a-input placeholder="Please input gender" allow-clear/>
          </a-form-model-item>
        </a-col>
        <a-col :span="formItemSpan" class="ant-col">
          <a-form-model-item
            :colon="false"
          >
            <!-- <a-input placeholder="Please input major" allow-clear/> -->
            <a-select @change="handleChange">
               <a-select-option value="1" >
                  计算机科学与技术
                </a-select-option>
                <a-select-option value="2">
                  会计学
                </a-select-option>
                <a-select-option value="3" >
                  金融学
                </a-select-option>
                <a-select-option value="4">
                  物流管理
                </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :span="formItemSpan">
          <a-form-model-item>
            <a-button type="primary" @click="searchHandle">search</a-button>
            <a-button type="primary" @click="searchHandle">Download</a-button>
            <a-button type="primary" @click="searchHandle">Upload</a-button>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
    <a-table
      row-key="id"
      :data-source="list"
      bordered
      :pagination="{ pageSize: 5 }">
      <a-table-column
        v-for="(col) in columns"
        :key="col.dataIndex"
        :data-index="col.dataIndex">
        <template #title>
          {{ col.title }}
        </template>
        <template slot-scope="text, record">
          <router-link v-if="col.dataIndex === 'name'" :to="{ name: 'detail', params: {id: record.id}}" >{{ text }}</router-link>
          <a-tooltip v-else>
            <template #title>
              {{ text }}
            </template>
            {{ text }}
          </a-tooltip>
        </template>
      </a-table-column>
      <a-table-column title="action">
        <template v-slot="text, record">
          <a-button  type="primary" @click="showModal">
            更新
        </a-button>
        <!-- <a-modal
          title="Title"
          :visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <p>{{ ModalText }}</p>
          <a-form-model>
            <a-form-model-item label="姓名">
            <a-input v-model="form.fieldA" placeholder="input placeholder" />
          </a-form-model-item>
          <a-form-model-item label="年龄">
            <a-input v-model="form.fieldB" placeholder="input placeholder" />
          </a-form-model-item>
          <a-form-model-item label="性别">
            <a-input v-model="form.fieldB" placeholder="input placeholder" />
          </a-form-model-item>
          <a-form-model-item label="班级">
            <a-input v-model="form.fieldB" placeholder="input placeholder" />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
            <a-button type="primary">
              Submit
            </a-button>
          </a-form-model-item>
        </a-form-model>
       </a-modal> -->
        <a-button @click="removeClickHandler(record.id)">
        <a-popconfirm
          title="你确定删除吗?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a href="#">删除</a>
        </a-popconfirm>
        </a-button>
        </template>
      </a-table-column>
    </a-table>
  </div>
  <!-- <router-view v-else/> -->
</template>


<script>
import api from '../api.js'

const columns = [{
  dataIndex: 'id',
  title: 'id'
}, {
  dataIndex: 'name',
  title: 'name'
}, {
  dataIndex: 'age',
  title: 'age'
},
{
  dataIndex: 'gender',
  title: 'gender'
}, {
  dataIndex: 'major',
  title: 'major'
}
// {
//   title: 'action',
//   scopedSlots: {
//     customRender: 'action',
//   },
// }
]

export default {
  data () {
    return {
      formItemSpan: 4,
      list: [],
      columns,
      id: 1,
      // pagination: {},

      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,

      layout: 'horizontal',
        姓名: '',
        年龄: '',
        性别: '',
        班级: '',
    }
  },
  created () {
    console.log('uuuuuuuuuuuuuu')
    this.fetchStudentList()
  },

  methods: {
    fetchStudentList () {
      api.getStudentList().then((res) => {
        console.log('stu res', res)
        // this.pagination.total = res.total;
        this.list = res.list
        // this.$router.push('list');
      }).catch((err) => {
        console.log(err)
      })
    },
    edit (id) {
      console.log(id)
    },
    updateClickHandler (id) {
      console.log(id)
    },
    removeClickHandler (id) {
      console.log(id)
    },
    handleClick (e) {
      console.log('click', e)
    },
    searchHandle () {
      this.fetchStudentList()
    },
  handleChange(value) {
      console.log(value);
    },
    confirm(e) {
      console.log(e);
      this.$message.success('Click on Yes');
    },
    cancel(e) {
      console.log(e);
      this.$message.error('Click on No');
    },

     showModal() {
      this.visible = true;
    },
    handleOk() {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  },
  // computed: {
  //   formItemLayout() {
  //     const { layout } = this.form;
  //     return layout === 'horizontal'
  //       ? {
  //           labelCol: { span: 4 },
  //           wrapperCol: { span: 14 },
  //         }
  //       : {};
  //   },
  //   buttonItemLayout() {
  //     const { layout } = this.form;
  //     return layout === 'horizontal'
  //       ? {
  //           wrapperCol: { span: 14, offset: 4 },
  //         }
  //       : {};
  //   }
  // }
}

</script>

<style scoped>
.stu-layout {
  height: 1000px;
}
.stu-card {
  /* display: inline; */
    background: #feffff;
    width: 98%;
    margin: 12px auto;
    /* height: 100%; */
    height: auto;
    text-align: left;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
.form-layout {
  margin: 20px;
}
.form-item-style {
  margin: 2px;
}
.ant-col {
  /* padding: 0 16px 16px 16px; */
  padding: 0 8px;
}
</style>
