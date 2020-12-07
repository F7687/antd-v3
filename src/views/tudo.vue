<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>
        <a-input-search v-model:value="todo" placeholder="请输入要代办的事项" size="large" @search="addTodo">
          <template v-slot:enterButton>
            <a-button>新增</a-button>
          </template>
        </a-input-search>
        <h2 class="title">待办事项</h2>
        <a-card :title="`${index+1}、${item.time}`" v-for="(item,index) in todos" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="onChange(item,true)" />
          </template>
          {{item.content}}
        </a-card>
        <h2 class="title">已办事项</h2>
        <a-card :title="`${index+1}、${item.time}`" v-for="(item,index) in dones" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="onChange(item,false)" />
          </template>
          {{item.content}}
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
// 生命周期函数a
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from "vue";
export default {
  setup() {
    onBeforeMount(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 36 ~ onBeforeMount ~ onBeforeMount",
        onBeforeMount
      );

      // ...
    });
    onMounted(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 41 ~ onMounted ~ onMounted",
        onMounted
      );
      // ...
    });
    onBeforeUpdate(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 45 ~ onBeforeUpdate ~ onBeforeUpdate",
        onBeforeUpdate
      );
      // ...
    });
    onUpdated(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 49 ~ onUpdated ~ onUpdated",
        onUpdated
      );
      // ...
    });
    onBeforeUnmount(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 53 ~ onBeforeUnmount ~ onBeforeUnmount",
        onBeforeUnmount
      );
      // ...
    });
    onUnmounted(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 57 ~ onUnmounted ~ onUnmounted",
        onUnmounted
      );
      // ...
    });
    onActivated(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 61 ~ onActivated ~ onActivated",
        onActivated
      );
      // ...
    });
    onDeactivated(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 65 ~ onDeactivated ~ onDeactivated",
        onDeactivated
      );
      // ...
    });
    onErrorCaptured(() => {
      console.log(
        "🚀 ~ file: tudo.vue ~ line 69 ~ onErrorCaptured ~ onErrorCaptured",
        onErrorCaptured
      );
      // ...
    });
    const todo = ref("");
    const time = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
    const state = reactive({
      todoList: [
        {
          id: 1,
          done: false,
          time: time,
          content: "前往老八食堂，共进午餐"
        },
        {
          id: 2,
          done: true,
          time: time,
          content: "和giao哥合唱一曲"
        },
        {
          id: 3,
          done: false,
          time: time,
          content: "做点阳间的需求"
        }
      ]
    });
    // 添加待办事项
    const addTodo = value => {
      let arr = [
        "😂",
        "😘",
        "😊",
        "😁",
        "😭",
        "😜",
        "😄",
        "😡",
        "😀",
        "😥",
        "🙃",
        "😋",
        "👍",
        "👌",
        "❤",
        "😱",
        "🐷"
      ];
      let funny = arr[Math.floor(Math.random() * arr.length) + 1];
      let obj = {
        id: new Date().getTime() + state.todoList.length,
        done: false,
        time: time + funny,
        content: value
      };
      state.todoList.push(obj);
      console.log(
        "🚀 ~ file: tudo.vue ~ line 28 ~ addTodo ~ value",
        state.todoList
      );
    };
    // 通过计算属性，计算出生成的代办事项列表
    const todos = computed(() => state.todoList.filter(item => !item.done));
    // 通过计算属性，计算出生成的已办列表
    const dones = computed(() => state.todoList.filter(item => item.done));
    // 修改状态方法
    const onChange = (item, status) => {
      item.done = status;
      console.log("🚀 ~ file: tudo.vue ~ line 68 ~ setup ~ value", item);
    };
    return {
      todo,
      addTodo,
      state,
      todos,
      dones,
      onChange
    };
  }
};
</script>

<style scoped>
#components-layout-demo-basic {
  min-height: 100vh;
  /* max-width: 40%; */
  margin: 0 auto;
  background-color: #ededed;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  text-align: center;
  color: #fff;
}
.title {
  margin: 0;
  padding: 10px;
}
</style>
