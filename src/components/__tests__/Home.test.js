// setup file
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home';
configure({ adapter: new Adapter() });

describe('Shallow Home Page', () => {
    it('Object Check',() => {
        let wrapper = shallow(<Home/>)
        console.log(wrapper)
    })
})

