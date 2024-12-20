import { shallowMount } from '@vue/test-utils';
import AttendanceTracker from '../components/AttendanceTracker.vue';

describe('AttendanceTracker.vue', () => {
    it('renders time off request component', () => {
        const wrapper = shallowMount(AttendanceTracker);
        expect(wrapper.findComponent({ name: 'TimeOffRequest' }).exists()).toBe(true);
    });
});
