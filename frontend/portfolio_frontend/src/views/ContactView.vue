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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            consectetur numquam at eius blanditiis! Repellat ratione optio
            dolorem rem ullam ex ipsam laudantium ea corporis. Veritatis aliquam
            obcaecati beatae magni odit. Repellendus blanditiis voluptatem
            veritatis ea doloribus sapiente quos illum nulla molestiae
            assumenda, nisi veniam ipsam saepe quisquam molestias voluptatibus
            enim quidem impedit quae magnam corporis. Nam, animi tempore? Magni
            delectus a dolores obcaecati temporibus, praesentium voluptate
            tempora odio voluptas deserunt ipsum labore, dolorem nisi odit
            voluptatum asperiores maxime! Incidunt numquam vel similique ducimus
            molestiae sapiente laborum aliquid vitae maxime nesciunt cupiditate
            maiores aut eaque quia necessitatibus, quos soluta?
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
          </p>
          <p class="a-lot-of-text">
            Smarttek Academy Python Web Development: February 2022 - April 2022
            - program terminated due to russian invasion of Ukraine. <br />
          </p>
          <p class="a-lot-of-text">
            Coxit Academy Python: May 2022 - current
            <br />
          </p>
          <p class="a-lot-of-text">
            Smarttek Academy Python Web Development: June 2022 - current <br />
            - program continued and goes in parallel with Coxit Academy
            <br />
          </p>

          <p>Tech stack/Portfolio:</p>
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
</style>