<template>
  <div class="not-found">
    <h2>404: Page Not Found</h2>
    <p>This link does not exist.</p>
    <router-link to="/">
      <div class="return-home">
        <p>Return to Home</p>
        <font-awesome-icon :icon="['fa', 'home']" size="2x" class="icon" />
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.not-found, a {
  color: #fff3e8;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.return-home {
  text-decoration: none underline;
}
</style>