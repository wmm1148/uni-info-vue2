<template>
  <div v-if="$route.matched.length === 2">
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
            <a-input placeholder="Please input major" allow-clear/>
          </a-form-model-item>
        </a-col>
        <a-col :span="formItemSpan">
          <a-form-model-item>
            <a-button type="primary" @click="searchHandle">search</a-button>
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
          <a-button @click="updateClickHandler(record.id)">
          更新
        </a-button>
        <a-button @click="removeClickHandler(record.id)">
          删除
        </a-button>
        </template>
      </a-table-column>
    </a-table>
  </div>
  <router-view v-else/>
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
      id: 1
      // pagination: {},
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
    }
  }
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
