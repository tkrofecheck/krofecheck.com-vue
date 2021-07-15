import { shallowMount } from '@vue/test-utils';
import Profile from '@/components/Profile.vue';

describe('Profile.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Profile, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
