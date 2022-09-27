import axios from "axios";
import { useEffect, useState } from "react";
import DispatchOrderList from "../../Components/DispatchOrderList";
const DispatchedOrders=()=>{

    const [Orders, setdayWiseorder] = useState([]);
    const getOrders=()=>{
        const url=`http://localhost:8082/daywiseOrder/ListOfDispatched`
        axios.post(url).then((response)=>{

            const result=response.data
            if(result['status']=='success'){
                // navigate('/home')
                console.log(result['data'])
                setdayWiseorder(result["data"]);
            }
            else{
                alert(result.error)
            }
        })
    }
    useEffect(() => {
   
        getOrders();
      }, []);
    return(
        <div>
 <h1 style={{textAlign:"center"}}>Orders List</h1>
            <br/><br/>
              <div class="row">
    <div class="col">
      
    </div>
    <div class="col-10">
        <table class="table  table-dark table-striped">
     

        <thead class="table-primary">
            <th>userName</th>
            <th>user_address</th>
            <th>Area</th>
            <th>City</th>
            <th>Pincode</th>
            <th>OrderId</th>
            
            </thead>
            <tbody>

        {Orders.map((order) => {
                      
                      return <DispatchOrderList order={order}   />;
                    })}
                    </tbody>
            </table>

    </div>
    <div class="col">
      
    </div>
  </div>




        </div>
    )
}
export default DispatchedOrders