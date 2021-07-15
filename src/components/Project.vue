<template>
  <v-sheet
    id="portfolio"
    height="400"
    width="200"
    class="overflow-hidden"
    style="position: fixed; background: transparent; top: 20px"
  >
    <div class="container">
      <div class="contents">
        <div class="contents__copy">
          <h1>{{ msg }}</h1>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#portfolio {
  color: #2a2959;
}
</style>
