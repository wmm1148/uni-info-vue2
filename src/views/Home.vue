<template>
  <div class="stu">
    <a-layout class="stu-layout">
      <a-layout-sider width="240" style="background: #fff">
        <a-menu
          :selectedKeys="selectedKeys"
          mode="inline"
          :open-keys="openKeys"
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
            <a-sub-menu key="sub2" @titleClick="titleClick">
              <span slot="title"><a-icon type="idcard" /><span>Components</span></span>
              <a-menu-item key="menuTree">
                <router-link :to="{ name: 'menuTree'}">MenuTree</router-link>
              </a-menu-item>
              <a-menu-item key="form">
                <router-link :to="{ name: 'form'}">Form</router-link>
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
      openKeys: [],
      selectedKeys: [],
    }
  },
  created () {
    this.selectedKeys = [this.$route.name];
    this.openKeys = ['sub1', 'sub2'];
    // console.log('selectedKeys', this.selectedKeys);
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
      this.selectedKeys = [e.key]
      // this.openKeys = [e.keypath[1]]
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
