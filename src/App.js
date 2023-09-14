import './App.css';

import { Canvas } from "@react-three/fiber";
import { ScrollControls , Scroll} from "@react-three/drei";
import { Experience } from './components/Experience';
import Preloader from './components/Preloader';
import { useState,useEffect,useRef } from 'react';
import {Html } from '@react-three/drei';
import RadialGradientt from './components/radial-gradient (1).png';

function App() {


  const[load,setLoad]=useState(true)
  const[hover,setHover]=useState(false)
  return (

    <div className='aapp' >
       <Canvas camera={{
        position: [0, 0, 5],
        fov: 30,
      }} 
      onCreated={()=>{console.log("LOADEDDD");setLoad(true);}}>
      {
        load?
       <><Preloader/>
         <Html position={[-0.6,0,0]}>  
         <button style={{fontSize:"25px",fontFamily:"emoji",width: "max-content",border: "none",padding: "11px 30px",cursor:"pointer"}}
                 onClick={()=>setLoad(false)}               
                 onMouseOver={()=>setHover(true)}
                 onMouseOut={()=>setHover(false)}
                   >
              <div >Customize</div>
         </button>
         </Html>
       </>
       :
      
          <>
          <color attach="background" args={["blue"]} />
          <ScrollControls pages={2} damping={0.3} style={{width:"94.5%",height:"92%",top: "26px"}}> {/**you can listen and react to scrolling page using this */}
          <Experience/>

          <Scroll html position={[-0.8,2,0]}>
         
          <h3 className="text3" style={{top:'15vh',left:'10vw'}}>
            <div style={{marginLeft:"-56%",marginBottom:"-7%"}}>CUSHION COLOR </div><br/>
            <div style={{display:'flex'}}>
              <div className='colors'>
                <div className="colorrr"> </div>
                <span style={{margin:"10px"}}>Red</span>
                
              </div>
              
              <div className='colors'>
                <div className="colorrr green"></div>
                <span style={{margin:"10px"}}>Green</span>
              </div>

              <div className='colors'>
                <div className="colorrr blue"> </div>
                 <span style={{margin:"10px"}}>Blue</span>
              </div>
              </div>
          </h3>

          <h3 className="text3" style={{top:'35vh',left:'10vw'}}>
            <div style={{marginLeft:"-72%",marginBottom:"-7%"}}>SOFT SHELL </div><br/>
            <div style={{display:'flex'}}>
              <div className='colors'>
                <div className="colorrr red"> </div>
                <span style={{margin:"10px"}}>Maroon</span>
                
              </div>
              
              <div className='colors'>
                <div className="colorrr green"></div>
                <span style={{margin:"10px"}}>Pastel</span>
              </div>

              <div className='colors'>
                <div className="colorrr blue"> </div>
                 <span style={{margin:"10px"}}>Ocean</span>
              </div>
              </div>
          </h3>


          <h3 className="text3" style={{top:'55vh',left:'10vw',transition:'all 0.1s ease'}}>
            <div style={{marginLeft:"-56%",marginBottom:"-7%"}}>STAND COLOR</div><br/>
            <div style={{display:'flex'}}>
              <div className='colors'>
                <div className="colorrr"> </div>
                <span style={{margin:"10px"}}>Red</span>
                
              </div>
              
              <div className='colors'>
                <div className="colorrr green"></div>
                <span style={{margin:"10px"}}>Matcha</span>
              </div>

              <div className='colors'>
                <div className="colorrr blue"> </div>
                 <span style={{margin:"10px"}}>Sky</span>
              </div>
              </div>
          </h3>

          
          

          
          <h1 className="text2" style={{top:'100vh',left:'10vw'}}>Info 1</h1>
          </Scroll>

          </ScrollControls>
         </>
      
   }</Canvas>
    </div>
  );
}

export default App;
