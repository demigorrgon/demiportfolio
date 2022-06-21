<template>
  <div class="project">
    <vs-row>
      <vs-col w="4" style="margin-bottom: 20px">
        <vs-card type="4" class="project-card">
          <template #title>
            <h3>{{ title }}</h3>
          </template>
          <template #img>
            <img :src="require('@/assets/' + pictureName)" alt="" />
          </template>
          <template #text>
            <p class="card-description">{{ techStackUsed }}</p>
          </template>
          <template #interactions>
            <vs-button
              color="rgb(255,255,255)"
              border
              icon
              @click="goToGithubRepo"
            >
              <a :href="githubLink" target="_blank">
                <unicon name="github"></unicon
              ></a>
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
      <vs-col w="7" offset="1" style="padding: 5px 10px 5px 10px;">
        <p>{{ title }}</p>
        <p class="project-description">{{ description }}</p>
        <div class="features">
          <p>Features:</p>
          <div v-for="(item, idx) of featuresArray"
            :key="idx"
            class="features-list">
          <p>{{ item }}</p>
            </div>
          </p>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "techStackUsed",
    "description",
    "pictureName",
    "featuresArray",
    "githubLink",
  ],
  methods: {
    goToGithubRepo() {
      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style>
.project {
  margin-top: 50px;
}
.project-card {
  margin-left: 330px;
}

.features-list {
  padding: 0px;
  margin: 5px 0 5px 0;
  list-style-type: None;
}
.project-description {
  padding: 10px 30px 10px 30px;
}
.card-description {
  color: black !important;
}
</style>