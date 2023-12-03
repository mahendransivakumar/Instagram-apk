import React ,{useState}from 'react'
import {FaSearch} from'react-icons/fa'
import  "../timeline/Suggestions";
import Suggestions from '../timeline/Suggestions';
import Navbar from '../navigation/Navbar';
export const Searching = ({setResults}) => {

    const [input, setInput] = useState("");
  
    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          });
          setResults(results);
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  return (
    <div className='flex'>
    <Navbar/>
    <div>
      <FaSearch id="serach-icon"/>
      <input 
      placeholder='Type to search...'
      value={input}
      onChange={(e)=> handleChange(e.target.value)}
      />
      <div>
      
        <Suggestions/>
      </div>
      </div>
    </div>
    
  )
}

