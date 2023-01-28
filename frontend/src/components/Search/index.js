
import { Input } from 'antd';
import './search.css'
const { Search } = Input;
const onSearch = (value) => console.log(value);
const App = () => (
  <div className='search' >
    <Search size="large" placeholder="Escribe lo que buscas..." onSearch={onSearch} enterButton />
  </div>
);
export default App;