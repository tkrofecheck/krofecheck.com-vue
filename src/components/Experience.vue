<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card class="mx-auto my-4" tile flat elevation="5">
        <parallax
          :title="title"
          :info="info"
          :background="background"
        ></parallax>

        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(exp, index) in list"
                :key="`${exp}-${index}`"
                :cols="12"
                class="d-flex-inline align-stretch"
              >
                <v-card flat tile outlined elevation="5">
                  <v-container fluid>
                    <v-row class="ma-0 pa-1">
                      <v-col cols="12" sm="4" class="ma-0 pa-1">
                        <v-card-title>{{ exp.city }}</v-card-title>
                      </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-1">
                      <v-col
                        v-for="(company, index) in exp.companies"
                        :key="`${company}-${index}`"
                        cols="12"
                        sm="4"
                        :class="`ma-0 pa-1`"
                      >
                        <v-card-text>
                          <div>
                            <strong>{{ company.company }}</strong>
                          </div>
                          <div>
                            {{ company.industry }}
                          </div>
                          <div>
                            <em>{{ company.position }}</em>
                          </div>
                          <div>
                            <small>{{ company.year }}</small>
                          </div>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="right">
                <v-btn class="primary" to="/portfolio" title="Portfolio">
                  <span class="d-flex align-center justify-space-between">
                    Portfolio <v-icon>mdi-arrow-right</v-icon>
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Parallax from './Parallax.vue';

export default {
  name: 'Experience',
  components: {
    Parallax,
  },
  props: {
    background: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    formatArray(data) {
      const formattedData = data.map((item, index) => {
        return index < data.length - 1 ? ` ${item}` : ` and ${item}`;
      });
      return formattedData.join(',');
    },
  },
};
</script>

<style lang="scss" scoped></style>
