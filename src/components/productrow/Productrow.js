import React from 'react';
import './Productrow.css';

function Productrow() {
  return (
    <div className='card-row'>
        {/* Card 1 */}
        <div className='father-card'>
            <h2>Revamp your home in style</h2>
            <div className='mother-card'>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg' alt=''/>
                    <p>Cushion covers, bedsheets & more</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg' alt=''/>
                    <p>Figurines, vases & more</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg' alt=''/>
                    <p>Home storage</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg' alt=''/>
                    <p>Lighting solutions</p>
                </div>
            </div>
            <p className='see-more'>Explore all</p>
        </div>

        {/* Card 2 */}
        <div className='father-card'>
            <h2>Appliances for your home</h2>
            <div className='mother-card'>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' alt=''/>
                    <p>Air conditioners</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg' alt=''/>
                    <p>Refrigerators</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg' alt=''/>
                    <p>Microwaves</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg' alt=''/>
                    <p>Washing machines</p>
                </div>
            </div>
            <div className='see-more'>See more</div>
        </div>

        {/* Card 3 */}
        <div className='father-card'>
            <h2>Starting ₹149 | Headphones</h2>
            <div className='mother-card'>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg' alt=''/>
                    <p>Starting ₹249 | boAt</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg' alt=''/>
                    <p>Starting ₹349 | boult</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg' alt=''/>
                    <p>Starting ₹649 | Noise</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Zeb_0.5x._SY116_CB553870684_.jpg' alt=''/>
                    <p>Starting ₹149 | Zebronics</p>
                </div>
            </div>
            <div className='see-more'>See all offers</div>
        </div>

        {/* Card 4 */}
        <div className='father-card'>
            <h2>Latest styles | Dresses, kurta & more | 50% - 80% off</h2>
            <div className='mother-card'>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/05._SY116_CB555616559_.jpg' alt=''/>
                    <p>Kurta & sets</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/07._SY116_CB555616559_.jpg' alt=''/>
                    <p>Tops</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/04._SY116_CB555616559_.jpg' alt=''/>
                    <p>Dresses</p>
                </div>
                <div className='child-card'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GW/BTF_Refersh/June_17/PCQC/1x/New/06._SY116_CB555616559_.jpg' alt=''/>
                    <p>Sarees</p>
                </div>
            </div>
            <div className='see-more'>See all deals</div>
        </div>
    </div>
  )
}

export default Productrow

