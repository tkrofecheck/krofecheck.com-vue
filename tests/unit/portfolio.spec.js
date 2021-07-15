import { shallowMount } from '@vue/test-utils';
import Portfolio from '@/components/Portfolio.vue';

describe('Portfolio.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Portfolio, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
