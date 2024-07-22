// import React from 'react'
// import './Main.css'
// import { assets } from '../../assets/assets'

// const Main = () => {
//   return (
//     <> 
//     <div className='main'>
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>
//       <div className="main-container">
//         <div className="greet">
//           <p><span>Hello, Dev</span></p>
//           <p>How Can I help you today?</p>
//         </div>
//         <div className="cards">
//           <div className="card">
//             <p>Suggest beautiful place to see on upcoming road trip</p>
//           <img src={assets.compass_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Briefly summarise the concept of urban planning</p>
//           <img src={assets.bulb_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Suggest beautiful place to see on upcoming road trip</p>
//           <img src={assets.message_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Improve the readabiltiy of the following code</p>
//           <img src={assets.code_icon} alt="" />
//           </div>
//         </div>
//         <div className="main-bottom">
//           <div className="search-box">
//             <input type="text"  placeholder='Enter your prompt here'/>
//             <img src={assets.gallery_icon} alt="" />
//             <img  src={assets.mic_icon} alt="" />
//             <img src ={assets.send_icon} alt="" />

//           </div>
          
//         </div>
//         <p className='bottom-info'>Gimini can make mistakes. Check important info.</p>
//       </div>
      
//     </div>
//     </>
//   )
// } 

// export default Main


// import React, { useContext } from 'react';
// import './Main.css';
// import { assets } from '../../assets/assets';
// import { Context } from '../../contex/Contex';

// const Main = () => {
  
//   const {onSent,recentPrompt,showResult, loading, resultData,setinput,input}=useContext(Context)
//   return (
//     <> 
//     <div className='main'>
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="User Icon" />
//       </div>
//       <div className="main-container">
//         {showResult?<> <div>
//           <div className="greet">
//             <p><span>Hello, Dev</span></p>
//             <p>How Can I help you today?</p>
//           </div>
//           <div className="cards">
//             <div className="card">
//               <p>Suggest beautiful place to see on upcoming road trip</p>
//               <img src={assets.compass_icon} alt="Compass Icon" />
//             </div>
//             <div className="card">
//               <p>Briefly summarise the concept of urban planning</p>
//               <img src={assets.bulb_icon} alt="Bulb Icon" />
//             </div>
//             <div className="card">
//               <p>Suggest beautiful place to see on upcoming road trip</p>
//               <img src={assets.message_icon} alt="Message Icon" />
//             </div>
//             <div className="card">
//               <p>Improve the readability of the following code</p>
//               <img src={assets.code_icon} alt="Code Icon" />
//             </div>
//           </div>:
//           <div className='result'>
//             <div className="result-titile">
//               <img src={assets.user_icon} alt="" />
//               <p>{recentPrompt}</p>
//               </div> 
//               <div className="result-data">
//                 <img src={assets.gemini_icon} alt="" />
//                 <p dangerouslySetInnerHTML={{__html:resultData}}></p>
//               </div>
//               </div></>}
//        </div>

//         <div className="main-bottom">
//           <div className="search-box">
//             <input onChange={(e)=>setinput(e.target.value)}  value={input} type="text" placeholder='Enter your prompt here'/>
//             <div>
//             <img src={assets.gallery_icon} alt="Gallery Icon" />
//             <img src={assets.mic_icon} alt="Mic Icon" />
//             <img  onClick = {()=>onSent()}src={assets.send_icon} alt="Send Icon" />
//             </div>
//           </div>
//           <p className='bottom-info'>Gemini can make mistakes. Check important info.</p>
//         </div>
       
//       // </div>
   
//     </div>
//     </>
//   );
// }

// export default Main;
import React, { useContext } from 'react'
 import './Main.css';
 import { assets } from '../../assets/assets';
import { Context } from '../../contex/Contex';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setinput, input } = useContext(Context);

  return (
    <> 
      <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="User Icon" />
        </div>
        <div className="main-container">
          {!showResult ? 
            <div>
              <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How Can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest beautiful place to see on upcoming road trip</p>
                  <img src={assets.compass_icon} alt="Compass Icon" />
                </div>
                <div className="card">
                  <p>Briefly summarise the concept of urban planning</p>
                  <img src={assets.bulb_icon} alt="Bulb Icon" />
                </div>
                <div className="card">
                  <p>Suggest beautiful place to see on upcoming road trip</p>
                  <img src={assets.message_icon} alt="Message Icon" />
                </div>
                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="Code Icon" />
                </div>
              </div>
            </div>
          : 
            <div className='result'>
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div> 
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading? <div className="loader">
                  <hr/>
                  <hr/>
                </div>:
                <p dangerouslySetInnerHTML={{__html: resultData}}></p>}
              </div>
            </div>
          }
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input 
              onChange={(e) => setinput(e.target.value)}  
              value={input} 
              type="text" 
              placeholder='Enter your prompt here'
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" />
            </div>
          </div>
          <p className='bottom-info'>Gemini can make mistakes. Check important info.</p>
        </div>
      </div>
    </>
  );
}

export default Main;
