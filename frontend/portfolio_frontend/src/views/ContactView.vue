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
          <p>Summary</p>
          <hr />
          <p class="a-lot-of-text">
            Self-taught Python developer with passion to build services for
            humans. Most comfortable with Django/DRF/Flask frameworks, using
            PostgreSQL as default DB at almost all times, usually in Docker
            containers to simplify switching process between dev/test/prod
            environments of different projects. Certified expert in hiding external API keys and other configs in .env file and forgetting that your teammates might also need them
            <br>
            <br>
            Willing to switch to any NoSQL DB in case of need.
            <br>
            <br>
            This website was deployed with great help of docker-compose, nginx image in Docker and AWS EC2 service.
            <br>
            <br>
            Usually unittesting stuff with pytest. It's just great.
            <br>
            <br>
            Sometimes doing JS(VueJS specifically) stuff for fun, it does give
            some vibe of "I'm typing a lot of relatively meaningless code so I
            definitely look like 1337hackerman"
            <br>
            <br>
            Fueled by memes, videos, streams and bunch of Spotify playlists
          </p>

          <p>Languages</p>
          <hr />
          <ul>
            <li>Ukrainian - native</li>
            <li>
              English -
              <a
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
            <p class="what-learned">- First expirience in developing REST APIs with Flask. Sadly, had to withdraw due to multiple surgeries and quite a long recovery period.</p>

          </p>
          <p class="a-lot-of-text">
            <a href="https://dou.ua/calendar/42418/" target="_blank"
              >Smarttek Academy Python Web Development</a
            >
            - Unpaid Internship: February 2022 - April 2022 - program terminated
            due to russian invasion of Ukraine. <br />
            <p class="prog">Notable progress during the internship:</p>
            <p class="what-learned">- Was initially appointed into a group of ppl who'd be going into paid intership program, but litterally next day after the interview mr.putin decided to liberate me from my first money made as dev /shrug</p>
            <p class="what-learned">- Was leading a team of 4 devs in SCRUM environment, that shifted a bit into KANBAN and became a mix of both, really </p>
            <p class="what-learned">- Aforementioned project was an DRF/Vue thematic freelance board dedicated to find freelance people with knowledge and skills in building homes/bridges/roads etc. As ironic as it might sound, development of it died after the announcement of the pause in the internship</p>
            <p class="what-learned">- In general, it was a first expirience in working as a team, actually testing stuff with unittests, understanding how much pain setting up Gitlab CI is/was. And a lot of other fancy stuff. </p>

          </p>
          <p class="a-lot-of-text">
            <a href="https://dou.ua/calendar/42123/">Coxit Academy Python</a> -
            Unpaid Internship: May 2022 - current
            <p class="prog">Progress during the internship:</p>
            <p class="what-learned">- <a href="" target="_blank">IJRA</a> was initially a task of 'yo, create some CRUD API' which went a bit too south</p>
            <p class="what-learned">- Was responsible for implementing somewhat of a frontend for an internal application, that was using Slack API and it's Block Kit in Django application, which was a frontend app. Don't ask me why.</p>
            <p class="what-learned">- Learned about API mocking in tests (on top of basic unittests), which actually helped quite a bit in testing that awful Slack's API. Trust me, it <i>really</i> is.</p>
            <p class="what-learned">- Those sick bastards led me into using Ubuntu(Linux) as main OS.<br> <b>/s</b> just in case</i>.</p>
            <br />
          </p>
          <p class="a-lot-of-text">
            <a href="https://dou.ua/calendar/42418/" target="_blank"
              >Smarttek Academy Python Web Development</a
            >
            - Unpaid Internship: June 2022 - current <br />
            - program continued and goes in parallel with Coxit Academy
            <br />
            <p class="prog">Notable progress during the internship:</p>
            <p class="what-learned">- Was participating in <a href="http://hariart.org/" target="_blank">Hariart</a> project. Added celery worker for delayed emails sending.</p>
            <p class="what-learned">- Cleaned up dockerizing process in aforementioned project, learned about image hashing, reminded myself how to scrape pictures from websites in legal way.</p>
          </p>

          <p style="margin-top:30px">Tech stack/Portfolio:</p>
          <hr />
          <p>
            <vs-row>
              <vs-col w="1">
                <img
                  src="https://www.streamscheme.com/wp-content/uploads/2020/09/monkahmm-emote.png"
                  class="monkaHmm"
                />
              </vs-col>
              <vs-col w="6" style="margin: 10px 0px 0px 10px">
                <router-link to="/"
                  ><p style="color: black">
                    Where potentially could it be?
                  </p></router-link
                ></vs-col
              >
            </vs-row>
          </p>
          <p>Education:</p>
          <hr />
          <p class="a-lot-of-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            voluptates. Impedit facilis deserunt obcaecati iste temporibus
            molestias dignissimos voluptatem, quia perferendis totam iure sed
            debitis, atque earum eaque voluptas ab.
          </p>
          <p>Nerdy stuff:</p>
          <hr />
          <p class="external-links">
            <a href="https://www.codewars.com/users/demigorrgon"
              ><p>Codewars profile</p></a
            >

            <br />
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
</style>