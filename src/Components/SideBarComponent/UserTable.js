import React, {useEffect, useState} from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new
import axios from 'axios'
 

function UserTable() {
 

  const [myData,setMyData] = useState([]);

  const columns = React.useMemo(() => [
    {
      Header: "username",
      accessor: 'username',
    },
    {
      Header: "tele",
      accessor: 'tele',
    },
    {
      Header: "ville",
      accessor: 'ville',

    },
    {
      Header: "sport",
      accessor: 'sport',
      Cell: StatusPill,
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
    {
      Header: "instagram",
      accessor: 'instagram',

    },
    {
        Header: "facebook",
        accessor: 'facebook',

      },
  ], [])

 

 
  useEffect(() => {
    const access_token = JSON.parse(
      localStorage.getItem("userdata")
    ).accessToken;

    axios
      .get("http://localhost:8082/athlete/athletes", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);
      })
      .catch((error) => {
        // console.error(error.response.data)
      });
  }, []);

 
   

  return (
    <>
    
    <Table columns={columns} data={myData} />
    
        </>
         
        
     

 
      
  );
}

export default UserTable;

