/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Nothing from "../Carts/Nothing";
import Phone from "./Phone";


const Phones = ({phonesData}) => {
    if(phonesData.length <= 0) {

        return (
            <div>
                 

            </div>
        )
    }
    const show = true
    return (
        <div className="grid mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3">
            {}
          
            {
               phonesData.map((phone,idx)=>{
             
                      return (
                        <div key={idx}>
                         
                         <br />
                        <Phone phone={phone} show={show}></Phone>
                       </div>
                      )
                           
                })
            }
            
        </div>
    );
};

export default Phones;