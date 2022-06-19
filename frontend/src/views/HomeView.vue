<template>
  <div class="home">
    <about-me />
    <p>
      Here is the list of the projects that I've done in past 6 months.<br />
      They're clickable, don't be scared.
    </p>
    <project-item
      title="some"
      description="lorem"
      pictureName="github-pic.png"
      :featuresArray="['asd', 'qwe']"
    />
    <project-item
      title="some"
      description="lorem"
      pictureName="github-pic.png"
      :featuresArray="['asd', 'qwe']"
    />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import ProjectItem from "../components/ProjectItem.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: { AboutMe, ProjectItem },
};
</script>
