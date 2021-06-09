<template>
  <div class="stu">
    <a-layout class="stu-layout">
      <a-layout-sider width="240" style="background: #fff">
        <a-menu
          :default-selected-keys="['0101']"
          :selectedKeys="selectedKeys"
          mode="inline"
          :open-keys.sync="openKeys"
          @click="handleClick"
          class="ant-mune">
            <a-sub-menu key="sub1" @titleClick="titleClick">
              <span slot="title"><a-icon type="idcard" /><span>Dashboard</span></span>
              <a-menu-item key="analysis">
                <router-link :to="{ name: 'analysis'}">Analysis</router-link>
              </a-menu-item>
              <a-menu-item key="monitor">
                <router-link :to="{ name: 'monitor'}">Monitor</router-link>
              </a-menu-item>
              <a-menu-item key="workplace">
                <router-link :to="{ name: 'workplace'}">Workplace</router-link>
              </a-menu-item>
            </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <router-view />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openKeys: ['sub1'],
      selectedKeys: [],
    }
  },
  created () {
    this.selectedKeys = [this.$route.name];
    // console.log('selectedKeys', this.selectedKeys);
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
      this.selectedKeys = [e.key]
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
}

</script>


<style scoped>
.stu-layout {
  height: 945px;
}
/* .form-layout {
  margin: 20px;
}
.form-item-style {
  margin: 2px;
}
.ant-col {
  padding: 0 16px 16px 16px;
} */
.ant-mune {
  text-align: left;
}
.ant-menu-sub {
  padding-left: 16px;
  /* padding-left: 48px; */
}
.ant-menu-item-group-list {
  padding-left: 12px;
}
</style>
