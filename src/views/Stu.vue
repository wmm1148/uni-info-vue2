<template>
  <div class="stu">
    <a-layout class="stu-layout">
      <a-layout-sider width="240" style="background: #fff">
        <a-menu
          :default-selected-keys="['1']"
          mode="inline"
          :open-keys.sync="openKeys"
          @click="handleClick"
          class="ant-mune">
            <a-sub-menu key="sub1" @titleClick="titleClick">
              <span slot="title"><a-icon type="idcard" /><span>Student Information</span></span>
              <a-menu-item-group key="g1" class="ant-menu-sub">
                <template slot="title"><span>Basic</span></template>
                <a-menu-item key="1">
                  <router-link :to="{ name: 'stuInfo'}">Basic Info1</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                  <router-link :to="{ name: 'stuInfo2'}">Basic Info2</router-link>
                </a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group key="g2" title="Detail" class="ant-menu-sub">
                <a-menu-item key="3">
                  Detail Info1
                </a-menu-item>
                <a-menu-item key="4">
                  Detail Info1
                </a-menu-item>
              </a-menu-item-group>
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
    }
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
}

</script>


<style scoped>
.stu-layout {
  height: 1000px;
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
