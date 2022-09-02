import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FileDownload } from "@mui/icons-material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import {useState,useEffect} from 'react'
import axios from 'axios'
export default function Tree() {
  const [data,setData]=useState([]);
  var c=4
  useEffect(() => {
    const loadData = async () => {

      const response = await axios.get(
        `https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees`
      );
      console.log(response.data)
      setData(response.data);

    };
  
    loadData();
  }, []);
  return (
    <TreeView
      aria-label="Tree Employee View"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem nodeId={c+9} label="Employee 1">
        {data.filter((value)=>{
          if(value.manager_id==="EMP001"){
            return value
          }
        }).map((val)=>{
            return <div><TreeItem nodeId={c+88} label={val.id}>
                {data.filter((valu)=>{
          if(valu.manager_id===val.id){
            return valu
          }}).map((items)=>{
            return(<TreeItem nodeId={c+10} label={items.id} />)
          })
          }
            </TreeItem></div>
        })
        }
      </TreeItem>

    </TreeView>
  );
}
