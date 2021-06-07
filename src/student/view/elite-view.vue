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
        @change="tableChange"
        <a-table-column
          v-for="(col) in $options.columns"
          :key="col.dataIndex"
          :data-index="col.dataIndex">
          <template #title>
            {{ col.title }}
          </template>
          <template slot-scope="text, row">
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
                {{ text === 0 ? '非在读' : '在读' }}
              </template>
              {{ text === 0 ? '非在读' : '在读' }}
            </a-tooltip>
            <a-tooltip v-else>
              <template #title v-if="!row.editable">
                {{ text }}
              </template>
              <template v-if="['age'].includes(col.dataIndex) && row.editable">
                <a-input
                :value="text"
                type="number"
                @change="e => editHandleChange(e.target.value, col.dataIndex, row)"
                ></a-input>
              </template>
              <template v-else-if="['remark'].includes(col.dataIndex) && row.editable">
                <a-input
                :value="text"
                :max-length="20"
                @change="e => editHandleChange(e.target.value, col.dataIndex, row)"
                ></a-input>
              </template>
              <template v-else>
                {{ text }}
              </template>
            </a-tooltip>
          </template>
        </a-table-column>
        <a-table-column title="Action" class="flex-action">
          <template v-slot="text, row">
            <span v-if="row.editable">
              <a
              v-text="'Save'"
              @click="saveRow(row)"
              />
              <a
              v-text="'Cancel'"
              @click="cancelEditRow(row)"
              />
            </span>
            <span v-else>
              <a
              v-text="'Edit'"
              @click="editRow(row)"
              :disabled="editingKey !== ''"
              />
              <a-popconfirm
              title="你确定删除吗?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="removeClickHandler(row.id)"
              @cancel="cancel"
              >
                <a v-text="'Delete'" 
                :disabled="editingKey !== ''"
                />
              </a-popconfirm>
            </span>
          </template>
        </a-table-column>
      </a-table>
    </a-card>
  </div>
  <!-- <router-view v-else/> -->
</template>


<script>
import api from '../api.js'
import { eliteStuColumns } from '@/common/student.js'

export default {
  columns: eliteStuColumns,
  data () {
    return {
      headStyle: { 'font-weight': 'bold' },
      formItemSpan: 4,
      list: [],
      id: 1,
      editingKey: '',
      copyData: null,
      copyAge: null,
      copyRemark: null,
      // pagination: {},
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  created () {
    this.fetch()
    console.log('eliteStuColumns', eliteStuColumns);
  },
  activated () {
    this.editingKey = '';
    this.fetch();
  },
  watch: {
    editingKey (newValue) {
      console.log('new key:', newValue);
    }
  },
  methods: {
    fetch () {
      api.getEliteStuList().then((res) => {
        console.log('stu res', res)
        // this.pagination.total = res.total;
        this.list = res.list
        // this.$router.push('list');
      }).catch((err) => {
        console.log(err)
      })
    },
    editRow(row) {
      //存id 存原数据 切换编辑状态
      //存的数据有两种写法，根据数据量的多少
      //方式一：定义一个copyData
      //方式二: 有多少需要保存的就定义多少变量

      //方式一：
      const { age, remark, id } = row;
      this.copyData = { age, remark, id }
      this.editingKey = id
      // row.editable = true  //这里使用这种方式就不对
      this.$set(row, 'editable', true)  

      //方式二：
      // this.editingKey = row.id;
      // this.copyAge = row[this.age];
      // this.copyRemark = row[this.remark];
      // this.$set(row, 'editable', true);
    },
    saveRow(row) {
      api.updateStudent(row).then((res) => {
        console.log('updateStudent res', res);
        this.$set(row, 'editable', false)
        this.editingKey = ''
      }).catch((err) => {
        console.log(err);
      })
    },
    cancelEditRow(row) {
      const { age, remark } = this.copyData;
      row.age = age
      row.remark = remark
      this.editingKey = ''
      this.$set(row, 'editable', false) //修改对象页面不刷新，这里还是用$set
      console.log(row.editable);
    },
    editHandleChange (value, dataIndex, row) {
      this.$set(row, dataIndex, value)
    },
    tableChange () {
      console.log('tableChange tableChange');
      this.editingKey = '';
      this.fetch();
    },
    updateClickHandler (id) {
      console.log(id)
    },
    removeClickHandler (id) {
      console.log(id)
      api.removeStudent(id).then().catch((err) => {
        console.log(err)
      })
    this.fetch()  //这里重新获取数据，
    },
    handleClick (e) {
      console.log('click', e)
    },
    searchHandle () {
      this.fetch()
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
/**
 * 编辑单行需要的数据：数字（可加减1）——age、输入框——remark
 * 需要一个变量控制显示编辑按钮还是保存等按钮 row.editable
 * 需要一个变量保存当前编辑的行 editingKey = row.id
 * 
 * 点击编辑->保存行、保存当前数据
 *    点击保存->保存数据并更新
 *    点击取消->恢复原数据
 */
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
  td {
    width: 200px;
  }
</style>
