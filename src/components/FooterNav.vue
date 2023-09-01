<template>
    <div class="card bg-transparent d-flex flex-row justify-content-between border-0">
      <router-link :to="'/caryllou-portfolio-v2' + prevUrlLink">
        <button class="btn btn-primary btn-sm border-0">
          <font-awesome-icon icon="fa-arrow-left" />
          {{ prevLinkText }}
        </button>
      </router-link>
      <router-link :to="'/caryllou-portfolio-v2' + nextUrlLink">
        <button class="btn btn-primary btn-sm border-0">
          {{ nextLinkText }}
          <font-awesome-icon icon="fa-arrow-right" />
        </button>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'FooterNav',
  props: {
    nextUrlLink: {
      type: String,
      required: true,
    },
    nextLinkText: {
      type: String,
      required: true
    },
    prevUrlLink: {
      type: String,
      required: true,
    },
    prevLinkText: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #fff3e8;
  color: black;
}

.card {
  margin: 20px 0;
}

</style>