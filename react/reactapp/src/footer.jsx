import Counter from './counter.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'; 
import {datacontext} from './Courselist.jsx';
function footer() {
  const data=useContext(datacontext);
  return (
    <footer>
      <Link to="/counter">counter</Link>
      <p>© 2024 My React App. All rights reserved.</p>
      
      <h1>{data}</h1>
    </footer>
    
  );
}
export default footer;