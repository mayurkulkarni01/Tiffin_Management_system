import  img1  from '../Tiffin/images/img1.jpg'
import { useNavigate,Link } from 'react-router-dom'

import { useLocation } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
const styles = {

    detailsContainer: {
        marginTop: '10px',
        marginBottom: '10px',
      },
}

const Tiffin = (props ) =>{
    const { tiffin } = props
    const navigate = useNavigate()
    
    //  const id=1
    const EditTiffin=()=>{
        const tiffinId=tiffin.tiffinId
        navigate("/tiffinDetailsData" ,{state:{tiffinId:tiffinId}})
    }
    const DeleteTiffin=()=>{
        const id=tiffin.tiffinId
        const url=`http://localhost:8082/tiffin/delete/${id}`
        axios.delete(url).then((response)=>{
            toast('Tiffin Deleted Successfully')
        })
    }
   

    return (
        // <div>
        //     <div className="row" style={styles.detailsContainer}>
        //     <div className="col">{tiffin.tiffinName}</div>
        //     </div>

        //     <div className="row" style={styles.detailsContainer}>
        //     <div className="col">{tiffin.tiffinPrice}</div>
        //     </div>

        //     <div className="row" style={styles.detailsContainer}>
        //     <div className="col">{tiffin.description}</div>
        //     <button class="btn btn-primary" type="button">Description</button> 
        //          <button class="btn btn-primary" type="button"
        //             onClick={checkAddress}>Order Now</button>
        //     </div>
        // </div>
        
      //    </div>
                <div class="card">
              
                <div class="card-body">
                <img src={'http://localhost:8082/admin' + '/images/' + tiffin.tiffinImage}  class="card-img-top" alt="..." />
                    <h5 class="card-title">{tiffin.tiffinName}</h5>
                    {/* <p class="card-text">{tiffin.description}</p> */}
                    <h5 class="card-title">Price : {tiffin.tiffinPrice}</h5>
                    <p class="card-text">Description : {tiffin.description}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        {/* <button class="btn btn-primary me-md-2" type="button">Button</button> */}
                        {/* <button class="btn btn-primary" type="button" onClick={addDescription}>Description</button>  */}
                    <button class="btn btn-primary" type="button"
                  onClick={EditTiffin}  >Edit Tiffin</button>
         <button class="btn btn-danger" type="button" onClick={DeleteTiffin}>Delete </button>
                    </div>
                </div>
                </div>
            
            
        // </div>
    )
}

export default Tiffin