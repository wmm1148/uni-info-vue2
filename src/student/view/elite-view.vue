<template>
  <div>
    <a-card class="stu-card" title="Student Information" :headStyle='headStyle'>
      <template #extra>
        <a-icon type="plus-square" style="fontSize:1.3em" @click="addClick"/>
      </template>
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
              <a-select @change="handleChange" placeholder="Please select major">
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
          <a-col :span="8" class="form-btn-group">
            <a-form-model-item>
              <!-- <div class="btn-group"> -->
                <a-button class="btn" type="primary" @click="searchHandle">search</a-button>
                <a-button class="btn" @click="searchHandle">Download</a-button>
                <!-- <a-button type="primary" @click="searchHandle">Upload</a-button> -->
              <!-- </div> -->
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
          v-for="(col) in $options.columns"
          :key="col.dataIndex"
          :data-index="col.dataIndex">
          <template #title>
            {{ col.title }}
          </template>
          <template slot-scope="text">
            <!-- <router-link v-if="col.dataIndex === 'name'" :to="{ name: 'detail', params: {id: record.id}}" >{{ text }}</router-link> -->
            <!-- <a-switch v-else-if="col.dataIndex === 'status'"
            @click="statusChange(record.id)"
            :checked="text === 1"
            >
            <a-icon slot="checkedChildren" type="user" />
            <a-icon slot="unCheckedChildren" type="user-delete" />
            </a-switch> -->
            <a-tooltip v-if="col.dataIndex === 'status'">
              <template #title>
                {{ text }}
              </template>
              {{ text }}
            </a-tooltip>
            <a-tooltip v-else>
              <template #title>
                {{ text }}
              </template>
              {{ text }}
            </a-tooltip>
          </template>
        </a-table-column>
        <a-table-column title="Action" class="flex-action">
          <template v-slot="text, record">
            <!-- <a-button  type="primary" @click="showModal"> 更新 </a-button> -->
            <a>
              <a-icon type="edit" style="fontSize:1.3em" @click="editclick"/>
            </a>
            <a>
              <a-popconfirm
              title="你确定删除吗?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="removeClickHandler(record.id)"
              @cancel="cancel"
            >
              <!-- <a href="#">删除</a> -->
              <!-- <a-button>删除</a-button> -->
                <a-icon type="delete" style="fontSize:1.3em" @click="iconclick"/>
              </a-popconfirm>
            </a>
          </template>
        </a-table-column>
      </a-table>
    </a-card>
  </div>
  <!-- <router-view v-else/> -->
</template>


<script>
import api from '../api.js'
import { studentTableColumns } from '@/common/student.js'

export default {
  columns: studentTableColumns,
  data () {
    return {
      headStyle: { 'font-weight': 'bold' },
      formItemSpan: 4,
      list: [],
      id: 1,
      // pagination: {},

      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  created () {
    this.fetchStudentList()
    console.log('studentTableColumns', studentTableColumns);
  },

  methods: {
    fetchStudentList () {
      api.getEliteStuList().then((res) => {
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
      api.removeStudent(id).then((res) => {
        console.log('res',res);
        // this.pagination.total = res.total;
        // this.list = res.list
        // this.$router.push('list');
      }).catch((err) => {
        console.log(err)
      })
    this.fetchStudentList()
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
    iconclick () {

    },
    backClick () {
      this.$router.push('/stu/stuInfo/')
    },
    editclick () {
      // this.$router.push('/stu/stuInfo/add')
    },
    addClick () {
      this.$router.push('/stu/elite/add')
    },
    statusChange (id) {
      api.changeStuStatus(id).then(res => {
        this.list = res
      }).catch((err) => {
        console.log(err)
      })
    }
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
.form-btn-group {
  display:flex; 
  justify-content: flex-end;
}
.btn-group {
  display:flex; 
  justify-content: center;
}
.btn { /* css不是可以嵌套吗*/
  margin-left: 8px;
  }
  .flex-action {
    width: 100%;
    display: flex;
  }
  a {
    margin-right: 10px;
    }
</style>
