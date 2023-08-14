<template>
  <div class="digital-journal-container">
    <div class="card">
      <div class="card-body">
        <h2>
          01
        </h2>
        <div class="card-divider"/>
        <div class="card-title"><strong>

          Digital Journal
        </strong></div>
        <div class="card-divider"/>
        <div class="card-text"> <br/>
          This is a passion project that documents 2021. <br/> <br/>
          My goal was to design as much as possible in my free time and to explore design without any constraints you would normally face when working on a project for a client. <br/> <br/>
          Photos used were taken with a point and shoot camera, as I also wanted to learn more about shooting with and developing film. Featured here a several spreads with varying layouts. <br/> <br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DigitalJournalProject',
}
</script>

<style scoped>
.card-divider {
  width: 50%;
  height: 2px;
  background-color: #a5b49d;
  margin: 0.5rem auto;
}

.digital-journal-container {
  margin: 0 auto;
}

@media (min-width: 856px) {
  .digital-journal-container {
    max-width: 750px;
  }
}
</style>
