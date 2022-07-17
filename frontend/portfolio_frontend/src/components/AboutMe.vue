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
        <p style="font-size: 36px">Welcome, wonderer</p>
        <a href="https://github.com/demigorrgon" target="_blank"
          ><img
            src="@/assets/github-pic.png"
            class="github-pic"
            title="Github Profile"
        /></a>
        <p>I'm Valentyn Slivko aka demigorrgon</p>
        <p>
          Python backend development enjoyer (Django/DRF, Flask).<br />

          <br />
          Occasionally doing frontend stuff with VueJS. <br />Most of the time
          creating REST APIs and web services<br />
          Certified expert in gluing fingers together with a hot glue gun.
          <br />
          <br />

          Seeking new opportunities as a professional dev and human being.
        </p>
        <p style="margin-bottom: 1px">Get in touch/Grab my CV:</p>
        <vs-button
          size="large"
          @click="$router.push('contact')"
          color="success"
          style="margin: 0 auto"
        >
          Contact
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  // methods: {
  //   toContactPage() {
  //     this.$routre
  //   }
  // }
};
</script>

<style>
.about-me {
  margin-top: 70px;
}
.about-me p {
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  font-size: 24px;
  padding: 5px 3px 5px 3px;
  color: antiquewhite;
}
.about-me-wrapper {
  margin-top: 13px;
  padding: 30px 10px 10px 10px;
}
.github-pic {
  width: 5%;
  border-radius: 300px;
}
/* . {
  margin: 0 auto;
} */
</style>