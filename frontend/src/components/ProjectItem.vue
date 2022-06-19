<template>
  <div class="project">
    <vs-row>
      <vs-col w="4" style="border: 1px solid red;margin-bottom:20px;">
        <vs-card type="4" class="project-card">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img :src="require('@/assets/' + pictureName)" alt="" />
          </template>
          <template #text>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </template>
          <template #interactions>
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
      <vs-col w="7" offset="1" style="border: 1px solid red">
        <p>{{title}}</p>
        <p>{{description}}</p>
        <ul v-for="(item, idx) of featuresArray" :key="idx" class="features-list">
          <li>{{item}}</li>
        </ul>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "pictureName", "featuresArray"],
};
</script>

<style>
.project-card {
  margin-left: 100px;
}
.features-list {
  padding: 0;
  list-style-type: none;
}
</style>