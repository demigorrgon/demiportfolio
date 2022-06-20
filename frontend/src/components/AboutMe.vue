<template>
  <div class="about-me">
    <vs-row vs-justify="center" vs-align="center">
      <vs-col
        vs-type="flex"
        w="12"
        class="about-me-wrapper"
        vs-justify="center"
        vs-align="center"
      >
        <p>
          <b><i>Welcome, wonderer</i></b>
        </p>
        <a href="https://github.com/demigorrgon" target="_blank"
          ><img src="@/assets/github-pic.png" class="github-pic"
        /></a>
        <p>I'm Demigorrgon aka Valentyn Slivko</p>
        <p>
          Python backend development enjoyer (Django/DRF, Flask).<br />
          Working my way to become a python's backend holy trinity wielder (add
          FastAPI to the list of frameworks that I'm comfortable with)
          <br />
          Occasionally doing frontend stuff with VueJS. <br />Most of the time
          creating REST APIs and web services<br />
          Certified expert in gluing fingers together with a hot glue gun.
          <br />
          <br />

          Seeking new opportunities as a dev and human being.
        </p>
        <p style="margin-bottom: 1px">Get in touch:</p>
        <vs-button gradient @click="" color="#90ee90" style="margin: 0 auto">
          Contact
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-me {
  margin-top: 70px;
  border: 1px solid red;
}
.about-me-wrapper {
  padding: 10px 10px 10px 10px;
}
.github-pic {
  width: 5%;
  border-radius: 300px;
}
. {
  margin: 0 auto;
}
</style>