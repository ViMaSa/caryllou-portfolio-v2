<template>
  <div class="resume-container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Profile</h5>
        <div class="card-divider"></div>
        <p class="card-text">
          Junior graphic designer with two years of experience and an eye for detail. Proficient
          in Adobe Creative Suite, particularly Photoshop, InDesign, and Illustrator.
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Education</h5>
        <div class="card-divider"></div>
        <p>
          2014 — 2018<br/>
          <strong>University of Nevada Las Vegas<br/></strong>
          Bachelor of Science in Graphic Design & Media Minor in Art History<br/>
      </p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Experience</h5>
        <div class="card-divider"></div>
        <p>
          May 2019 — July 2021<br/>
          <strong>Colliers International | Jr. Graphic Designer<br/></strong>
          Coordinated with brokers and other designers to design brochures, e-blasts, and other assets.<br/>
          Improved turn around time for projects from 3–4 days to 2–3, and sometimes same day.<br/>
          Modernized old brochures and e-blasts according to new brand guidelines over a 3-month period, while also handling multiple new projects.<br/>
          Provided necessary support for operations manager around the office outside of design.<br/><br/>

          August 2018 — December 2018<br/>
          <strong>UNLV Graphic Design & Media Thesis Exhibition Student/Graphic Designer<br/></strong>
          Cooperated with the class Creative Director to create assets to promote the Fall 2018 Graphic Design & Media senior capstone show.<br/>
          Collaborated with another designer to design capstone book from conception to print.<br/>
          Participated in the show by creating and presenting a design solution to a problem through branding and identity, along with multiple assets to promote said brand and identity.<br/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumePage',
}
</script>

<style scoped>
.card {
  margin: 20px 0;
}

.card-divider {
  width: 50%;
  height: 2px;
  background-color: #a5b49d;
  margin: 0.5rem auto;
}

.resume-container {
  margin: 0 auto;
}

@media (min-width: 856px) {
  .resume-container {
    max-width: 750px;
  }
}
</style>