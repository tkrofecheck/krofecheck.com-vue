<template>
  <div id="portfolio">
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-card
          v-for="(company, idx1) in companies"
          :key="`${company}-${idx1}`"
          elevation="10"
          tile
        >
          <v-card-title
            v-html="company.company"
            @click="openPage(company.url)"
          ></v-card-title>
          <v-card-subtitle v-html="company.industry"></v-card-subtitle>
          <v-card-text>
            <project
              v-for="(project, idx2) in company.projects"
              :key="`${company}-${project}-${idx2}`"
              :company="company.company"
              :display="project.display"
              :name="project.name"
              :image-folder="project.folder"
              :images="project.images"
              @open="openPage(company.url)"
            ></project>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  name: 'Portfolio',
  components: {
    Project,
  },
  data() {
    return {
      companies: [
        {
          company: 'WebMD (Medscape)',
          url: '//www.medscape.com',
          industry: 'Health News - Publishing',
          projects: [],
        },
        {
          company: 'Thomas',
          url: '//www.thomasnet.com',
          industry: 'Industry',
          projects: [],
        },
        {
          company: 'WebMD',
          url: '//www.webmd.com',
          industry: 'Health News - Publishing',
          projects: [],
        },
        {
          company: 'Time Inc.',
          url: '//www.timeinc.com',
          industry: 'Digital Media - Publishing',
          projects: [
            {
              display: true,
              name: 'Time For Kids Classroom App',
              folder: 'timeinc/tfkclassroom',
              images: [
                { name: '1_tfkclass_welcome.jpg' },
                { name: '2_tfkclass_learnmore.jpg' },
                { name: '3_tfkclass_signin.jpg' },
                { name: '4_tfkclass_library.jpg' },
                { name: '5_tfkclass_settings.jpg' },
                { name: '6_tfkclass_issue.jpg' },
                { name: '7_tfkclass_teacherquizkey.jpg' },
                { name: '8_tfkclass_studentquiz.jpg' },
                { name: '9_tfkclass_samples.jpg' },
                { name: '10_tfkclass_faq.jpg' },
                { name: '11_tfkclass_legal.jpg' },
              ],
            },
            {
              display: true,
              name: 'Transactional Emails',
              folder: 'timeinc/email',
              images: [
                {
                  name: '1_coastal.jpg',
                  text: 'Forgot Password Email (desktop version)',
                },
                {
                  name: '2_coastal_mobile.jpg',
                  text: 'Forgot Password Email (mobile version)',
                },
              ],
            },
            {
              display: true,
              name: 'iPhone Storefront',
              folder: 'timeinc/iphone-sf',
              images: [
                {
                  name: '1_pe_storefront.jpg',
                  text: 'Custom webview storefront. Separate code from iPad storefront. Latest issue in hero position along with back issues available in vertical scroll.',
                },
                {
                  name: '2_pe_issue.jpg',
                  text: 'Details about the issue when tapping the issue cover from the storefront. ',
                },
                {
                  name: '3_pe_library.jpg',
                  text: 'Library consisting of entitled issues purchased through the storefront, activated via print subscription, or entitled by other (online digital subscription without iTunes) means through login credentials. ',
                },
              ],
            },
            {
              display: true,
              name: 'iPad Storefront',
              folder: 'timeinc/ipad-sf',
              images: [
                {
                  name: '1_time_library.jpg',
                  text: 'Library consisting of issues to be purchased, downloaded, and viewed. The top horizontal section is a web viewer used for cross-selling to other brands and apps as well as advertising subscriptions, free samples, and special offers.',
                },
                {
                  name: '2_people_storefront.jpg',
                  text: 'The storefront for People is unique in that it is the only brand using this design. The storefront lists the most current issue along with recent back issues to be purchased and downloaded.',
                },
                {
                  name: '3_people_regform.jpg',
                  text: 'This is a registration form used to create a digital account. A digital account allows you to sign-in to different apps (iPad / Kindle Fire) to access purchased issues and subscriptions.',
                },
                {
                  name: '4_people_myaccount.jpg',
                  text: "The my account section allows the user to navigation through account management from 'forgot password' to 'terms of service' and 'privacy policies'.",
                },
                {
                  name: '5_ew_storefront.jpg',
                  text: 'Similar to the People storefront, this is the shared designed across other Time Inc brands on iPad.',
                },
                {
                  name: '6_si_storefront.jpg',
                  text: 'Similar to the People storefront, this is the shared designed across other Time Inc brands on iPad.',
                },
                {
                  name: '7_si_preview.jpg',
                  text: 'Tapping a cover within the store that has not been downloaded, will open this preview. The preview provides a small example of what can be found within the issue, along with the option to purchase or download the issue.',
                },
                {
                  name: '8_amex_welcome.jpg',
                  text: 'First screen displayed. UX design helps user identify where to begin (subscribe digtally, browse issues, or access if you are a print subscriber).',
                },
                {
                  name: '9_amex_storefront.jpg',
                  text: 'Unique to the traditional Time Inc storefronts, this is a new look to experiment what encourages users to browse, subscribe or buy single copies.',
                },
                {
                  name: '10_amex_issue.jpg',
                  text: 'Screenshot with a swipable UX to allow users to see what they are buying, before they commit to a purchase.',
                },
              ],
            },
            {
              display: true,
              name: 'Kindle Fire Storefront',
              folder: 'timeinc/kindle-sf',
              images: [
                { name: '1_people_storefront.jpg' },
                { name: '2_people_storefront2.jpg' },
                { name: '3_people_signin.jpg' },
              ],
            },
            {
              display: true,
              name: 'Misc. Web Projects',
              folder: 'timeinc/misc',
              images: [
                {
                  name: '1_si_lookback.jpg',
                  text: 'SI Lookback (SI Vault) standalone jQuery page. - visit at http://subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/si-lookback1113/si-lookback.html',
                },
                {
                  name: '2_ew_webapp.jpg',
                  text: 'Entertainment Weekly - Adobe DPS Web Application. - visit at https://subscription.ew.com/storefront/site/ew-digitalmagazine/login.html',
                },
                {
                  name: '3_amazon_astore.jpg',
                  text: 'Amazon Affiliate Store - iFrame pulled into Time Inc hosted landing page. - visit at http://subscription-assets.timeinc.com/prod/assets/themes/magazines/SUBS/templates/velocity/site/amz-timebooks1114/lp.html',
                },
                {
                  name: '4_tfk_contentviewer.jpg',
                  text: 'Sample Web Reader (images/video) to replace Adobe Flash reader for cross-browser support (iPad included). - visit at http://goo.gl/NdMa4A',
                },
              ],
            },
          ],
        },
        {
          company: 'New York Post',
          url: '//www.nypost.com',
          industry: 'Digital Media - Publishing',
          projects: [
            {
              display: true,
              name: 'iPad Ad Counts',
              folder: 'nyp/adcounts',
              images: [
                {
                  name: '1_home.jpg',
                },
                {
                  name: '2_select_issue.jpg',
                },
                {
                  name: '3_issue_start.jpg',
                },
                {
                  name: '4_click_save_and_see_json-1.jpg',
                },
                {
                  name: '5_click_save_and_see_json-2.jpg',
                },
                {
                  name: '6_pull_saved_ad_info.jpg',
                },
              ],
            },
            {
              display: true,
              name: 'Daily e-Newsletter',
              folder: 'nyp/newsletter',
              images: [
                {
                  name: '1_newsletter.jpg',
                },
                {
                  name: '2_newsletter.jpg',
                },
                {
                  name: '3_newsletter.jpg',
                },
                {
                  name: '4_newsletter.jpg',
                },
              ],
            },
            {
              display: true,
              name: 'Email Management',
              folder: 'nyp/email',
              images: [
                {
                  name: 'signup.jpg',
                },
                {
                  name: 'emailpref.jpg',
                },
                {
                  name: 'move_legacy.jpg',
                },
                {
                  name: 'email_signup_widget.jpg',
                },
              ],
            },
            {
              display: true,
              name: 'Web Projects',
              folder: 'nyp/site',
              images: [
                {
                  name: 'newyorkpost.jpg',
                },
                {
                  name: 'pagesixmag.jpg',
                },
                {
                  name: 'alexa.jpg',
                },
                { name: 'classroomextra.jpg', text: 'Classroom Extra' },
              ],
            },
          ],
        },
        {
          company: 'Acxiom Digital',
          url: '//www.acxiom.com',
          industry: 'Email Marketing',
          projects: [
            {
              display: false,
              name: 'Dynamic Newsletters / Microsite - Wyndham Worldwide Hotels',
              folder: 'acxiom/wyndham',
              images: [
                {
                  name: 'email_hojo.jpg',
                },
                {
                  name: 'email_wingate.jpg',
                },
                {
                  name: 'page_ramada.jpg',
                },
              ],
            },
            {
              display: false,
              name: 'Microsites',
              folder: 'acxiom/microsites',
              images: [
                {
                  name: 'baa.jpg',
                },
                {
                  name: 'comcast.jpg',
                },
                {
                  name: 'fedex.jpg',
                },
                {
                  name: 'royal_caribbean.jpg',
                },
                {
                  name: 'sprint.jpg',
                },
                {
                  name: 'upromise.jpg',
                },
              ],
            },
          ],
        },
        {
          company: 'krofecheck.com',
          url: '//wedding.krofecheck.com',
          industry: 'Personal',
          projects: [
            {
              display: true,
              name: 'Wedding Website',
              folder: 'personal/wedding',
              images: [
                {
                  name: '1_personal_wedding.jpg',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    openPage(url) {
      if (url) {
        window.open(url);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
