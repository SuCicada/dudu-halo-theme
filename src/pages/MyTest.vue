<template>
  <div class="card-wrap">
    <div>sdaf</div>
    <div class="card-context card-add">+</div>
    <!-- vue的遍历，目的是创造data.length个数的card -->
    <div class="card-context" v-for="item in data" :key="item.id">
      card
    </div>
    <!-- vue的if语句，目的是添加空card块占位 -->
    <div class="card-context no-border" v-if="lastRowBlankColumn >= 1"></div>
    <div class="card-context no-border" v-if="lastRowBlankColumn >= 2"></div>
    <div class="card-context no-border" v-if="lastRowBlankColumn >= 3"></div>
    <div class="card-context no-border" v-if="lastRowBlankColumn >= 4"></div>
  </div>
</template>

<script>
export default {
  name: "MyTest"
}
</script>

<style scoped>
.card-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.card-context {
  flex: 1;
  width: 300px;
  min-width: 300px;
  height: 100px;
  margin: 10px;
  border: solid 3px pink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
}
.card-context.no-border {
  border: none;
}
</style>
