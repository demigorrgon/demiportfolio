<template>
  <div class="home">
    <about-me />
    <p>
      Here is the list of the projects that I've done in past 6 months.<br />
      They're clickable, don't be scared.
    </p>

    <project-item
      title="some cool project idk"
      techStackUsed="Backend: Django/Django Rest Framework, PostgreSQL. Frontend: VueJS, Vuex. Styling: Vuesax 3. Containerized with Docker"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero, adipisci exercitationem quis velit aliquid, reprehenderit, perferendis quam dignissimos corporis facere tempora magnam! Quam aspernatur quos reprehenderit velit vero provident rerum asperiores, illo cumque. Aspernatur at minima odio sed ullam cumque aperiam impedit corporis accusamus. Delectus cupiditate nam quisquam fuga sapiente ipsa minima consequatur repellendus, animi voluptatem quas, aspernatur nesciunt possimus. Corporis nihil at totam voluptas quod iure quisquam non, illum voluptates itaque cum ipsum maxime vero quas vel ratione? Corrupti facilis doloribus reiciendis harum odit molestias possimus suscipit. Animi, recusandae enim iure ex placeat sapiente et libero officiis."
      pictureName="github-pic.png"
      :featuresArray="['asd', 'qwe']"
    />
    <project-item
      title="some"
      techStackUsed="Backend: Vanilla Flask, PostgreSQL. Frontend: VueJS, Vuex. Styling: Vuesax 3. Containerized with Docker"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero, adipisci exercitationem quis velit aliquid, reprehenderit, perferendis quam dignissimos corporis facere tempora magnam! Quam aspernatur quos reprehenderit velit vero provident rerum asperiores, illo cumque. Aspernatur at minima odio sed ullam cumque aperiam impedit corporis accusamus. Delectus cupiditate nam quisquam fuga sapiente ipsa minima consequatur repellendus, animi voluptatem quas, aspernatur nesciunt possimus. Corporis nihil at totam voluptas quod iure quisquam non, illum voluptates itaque cum ipsum maxime vero quas vel ratione? Corrupti facilis doloribus reiciendis harum odit molestias possimus suscipit. Animi, recusandae enim iure ex placeat sapiente et libero officiis."
      pictureName="github-pic.png"
      :featuresArray="['asd', 'qwe']"
      githubLink="https://github.com/demigorrgon/el-shopperino-dj-vue"
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
