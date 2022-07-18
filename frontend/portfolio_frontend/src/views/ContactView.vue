<template>
  <div class="contact">
    <vs-row>
      <vs-col w="3" offset="1" style="border-right: 2px solid gray">
        <vs-row>
          <vs-col w="6" offset="3" vs-align="center">
            <img
              class="face-pic"
              :src="require('@/assets/muh_face_somewhatok_edited_hair.png')"
            />
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col>
            <p class="fullname">Valentyn Slivko</p>
          </vs-col>
          <vs-col>
            <p class="side-info">Location: Lviv, Ukraine</p>
          </vs-col>
          <vs-col>
            <p class="side-info">Email: demigorrgon@gmail.com</p>
          </vs-col>
          <vs-col>
            <p class="side-info">Age: Back hurts from time to time</p>
          </vs-col>
          <vs-col vs-justify="center" class="icons">
            <vs-row>
              <vs-col w="1" offset="4" display="flex">
                <a href="https://github.com/demigorrgon" target="_blank"
                  ><unicon name="github"></unicon
                ></a>
              </vs-col>
              <vs-col w="1">
                <a href="https://t.me/demigorrrgon" target="_blank"
                  ><unicon name="telegram"></unicon
                ></a>
              </vs-col>
              <vs-col w="1">
                <a href="#"><unicon name="skype"></unicon></a>
              </vs-col>
              <vs-col w="1">
                <a
                  href="https://www.linkedin.com/in/demigorrgon/"
                  target="_blank"
                  ><unicon name="linkedin"></unicon
                ></a>
              </vs-col>
            </vs-row>
            <vs-col style="margin-top: 15px">
              <vs-button warn gradient style="margin: 0 auto">
                Export as pdf
              </vs-button>
            </vs-col>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col w="7" offset="1">
        <vs-col
          w="8"
          class="cv-description"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
        >
          <p>Profile</p>
          <hr />
          <p class="a-lot-of-text">
            &emsp;Self-taught back-end developer with passion to build services for humans, with more than a year of experience using Python and it's rich infrastructure 
            <br>
            &emsp;Washed up candidate master in chess.
            <br>
            &emsp;Certified expert in hiding external API keys and other configs in .env file and forgetting that your teammates might also need them &emsp;/s   
          </p>

          <p>Languages</p>
          <hr />
          <ul>
            <li>Ukrainian - native</li>
            <li>
              English -
              <a
              class="profile-links"
                href="https://www.efset.org/cert/AjUBNV"
                title="Link to certificate"
                >low C2</a
              >
            </li>
            <li>Russian - sadly also native</li>
          </ul>
          <p>Commercial experience:</p>
          <hr />
          <p class="a-lot-of-text">
            EPAM University Program Python Autumn 2020: October 2020 - December
            2020 - terminated due to major health issues.
            <br />
            <p class="prog">Notable progress during the internship:</p>
            <p class="what-learned">- First experience in developing REST APIs with Flask. Sadly, had to withdraw due to multiple surgeries and quite a long recovery period.</p>

          </p>
          <hr style="opacity: 0.2">
          <p class="a-lot-of-text">
            <a class="profile-links" href="https://dou.ua/calendar/42418/" target="_blank"
              >Smarttek Academy Python Web Development</a
            >
            - Unpaid Internship: February 2022 - May 2022 <br />
            <p class="prog">Notable progress during the internship:</p>
            <p class="what-learned">- Was initially appointed into a group of ppl who'd be going into paid intership program, but litterally next day after the interview mr.putin decided to liberate me from my first money made as dev /shrug</p>
            <p class="what-learned">- Was working in a team of 4 devs in SCRUM environment, that shifted a bit into KANBAN and became a mix of both </p>
            <p class="what-learned">- Aforementioned project was an DRF/Vue thematic freelance board dedicated to find freelance people with knowledge and skills in building homes/bridges/roads etc.</p>
            <p class="what-learned">- In general, it was a first experience in working as a team, actually unittesting code, planning and communicating through issues. </p>
            <p class="what-learned">- Was responsible for building a chat app with the help of <a class="profile-links" href="https://channels.readthedocs.io/en/stable/" target="_blank">django-channels</a>; CI pipeline setup in Gitlab and other usual stuff</p>


          </p>
          <hr style="opacity: 0.2">
          <p class="a-lot-of-text">
            <a class="profile-links" href="https://dou.ua/calendar/42123/">Coxit Academy Python</a> -
            Unpaid Internship: April 2022 - End of May 2022
            <p class="prog">Notable progress during the internship:</p>
            <p class="what-learned">- <a class="profile-links" href="http://demigorrgon.design/ijra/" target="_blank">IJRA</a> was initially a task of 'yo, create some CRUD API' which went a bit too south</p>
            <p class="what-learned">- Was responsible for implementing somewhat of a frontend for an internal application, that was using Slack API and it's Block Kit in Django application, which was a frontend app. Don't ask me why.</p>
            <p class="what-learned">- Learned about API mocking in tests (on top of basic unittests), which actually helped quite a bit in testing Slack's API.</p>
            <p class="what-learned">- Those sick bastards led me into using Ubuntu(Linux) as main OS.<br> <b>/s</b> just in case</i>.</p>
            <br />
          </p>
          <hr style="opacity: 0.2">
          <p class="a-lot-of-text">
            Junior Python/Django dev at Smarttek: June 2022 - current</p>
          
            <p class="what-learned">- Participating in development of <a class="profile-links" href="http://hariart.org/" target="_blank">Hariart</a> (non-NDA) project's development.</p> 
            <p class="what-learned">&emsp;- Developing backend logic, added <a class="profile-links" href="https://docs.celeryq.dev/en/stable/" target="_blank">celery</a> worker for delayed emails sending to the project.</p>
            <p class="what-learned">&emsp;- Cleaned up dockerizing process, learned about image hashing, reminded myself how to scrape pictures from websites (internal website with a list of pictures) in a legal way.</p>
          </p>

          <p style="margin-top:30px">Tech stack:</p>
          <hr />
          <p>
            <vs-row>
              <vs-col><p class="">Backend related:</p></vs-col>
              <vs-col><p class="what-learned">- Python 3.6+</p></vs-col>
              <vs-col><p class="what-learned">- Django/Django REST Framework</p></vs-col>
              <vs-col><p class="what-learned">- Flask (Flask-SQLAlchemy, Flask-Marshmallow, Flask-Migrate)</p></vs-col>
              <vs-col><p class="">Databases:</p></vs-col>
              <vs-col><p class="what-learned">- PostgreSQL</p></vs-col>
              <vs-col><p class="what-learned">- sqlite</p></vs-col>
              <vs-col><p >Scraping:</p></vs-col>
              <vs-col><p class="what-learned">- Selenium (dynamic websites)</p></vs-col>
              <vs-col><p class="what-learned">- requests + beautifulsoup4 (static websites)</p></vs-col>
              <vs-col><p >Testing:</p></vs-col>
              <vs-col><p class="what-learned">- pytest</p></vs-col>
              <vs-col><p class="what-learned">- DRF test client/factory for API testing</p></vs-col>
              <vs-col><p class="what-learned">- Postman (manual)</p></vs-col>
              <vs-col><p >DevOps related:</p></vs-col>
              <vs-col><p class="what-learned">- Docker/docker-compose</p></vs-col>
              <vs-col><p class="what-learned">- nginx as a docker-compose service, basic configs etc</p></vs-col>
              <vs-col><p class="what-learned">- Github Actions/Gitlab runner setups </p></vs-col>
              <vs-col><p >Frontend related:</p></vs-col>
              <vs-col><p class="what-learned">- Basic ES5/ES6 Javascript syntax, axios</p></vs-col>
              <vs-col><p class="what-learned">- Basic vuejs (lifecycle hooks, 'v-' keywords)</p></vs-col>
              <vs-col><p class="what-learned">- HTML5, vuetify, vuesax styling frameworks</p></vs-col>
            </vs-row>
          </p>
          <p>Education:</p>
          <hr />
          <p class="a-lot-of-text">
            &emsp;Lviv Polytechnic National University, Bachelor's degree: Automation and computer
integrated technologies, 2017-2021. Main technologies used: MATLAB, Simulink
          </p>
          <p class="a-lot-of-text">&emsp;Lviv Polytechnic National University, Master's degree: Automation and computer
integrated technologies, 2021-current. Main technologies used: MATLAB, Simulink</p>
          <p>Nerdy stuff:</p>
          <hr />
          <p class="external-links">
            <a href="https://www.codewars.com/users/demigorrgon"
              ><p>Codewars profile</p></a
            >

            <a href="https://leetcode.com/demigorrgon/"
              ><p>Leetcode profile</p></a
            >
          </p>
        </vs-col>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact {
  margin-top: 100px;
}
.face-pic {
  width: 80%;
  border-radius: 100px;
}
.fullname {
  font-size: 24px;
  font-weight: 800;
  font-style: italic;
  margin: 10px 0px 10px 0px;
}
.side-info {
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0px 5px 0px;
}
.icons {
  margin: 10px 0px 5px 0px;
}
.cv-description p {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin-left: 15px;
  margin-top: 10px;
}
.a-lot-of-text {
  padding: 10px 5px 10px 5px;
  font-weight: 300 !important;
}
hr {
  border: 1px solid black;
}
ul {
  list-style-type: none;
  margin-top: 10px;
}
.monkaHmm {
  width: 100%;
}
.external-links {
  margin-top: 15px !important;
  margin-bottom: 30px;
}
.external-links a {
  text-decoration: none;
  color: brown;
}
.prog {
  padding-left: 5px;
}
.what-learned {
  padding-left: 30px;
  font-weight: 300 !important;
}
.profile-links {
  text-decoration: none;
  color: #0000ee;
}
.profile-links:hover {
  text-decoration: underline;
}
</style>