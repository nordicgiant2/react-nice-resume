import 'regenerator-runtime/runtime';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';

beforeAll(() => {
    enzyme.configure({ adapter: new Adapter() });
    window.alert = jest.fn();
});