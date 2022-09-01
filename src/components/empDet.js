
import {React,useState,useEffect} from 'react'
import axios from 'axios'
import {useParams}from 'react-router-dom'
export default function EmpDet() {
  const [data,setData]=useState([]);
  const [loading, setLoading] = useState(false);

  const {name}=useParams()
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/${name}`
      );
      console.log(response.data)
      setData(response.data);
      setLoading(false);
    };
    
    loadData();
  }, []);
    
  return (
    data.map((item)=>{
      return <div>
        <h1>{item.first_name} {item.last_name}</h1>
      </div>
    })
  )
}

