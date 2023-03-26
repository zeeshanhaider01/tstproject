import React from 'react';
import { useRef, useState, button } from 'react';
import styles from '../styles/Home.module.css';
import Matchcard from './matchcard.js';

function Scrollbarmain(){
        const array=[1,2,3,4,5,6,7]
        const obj=useRef(null)
        const[btndisable,setbtndisable]=useState(true);

        const scroll=(element,speed,distance,step)=>{
            var scrollval=0
            var timer=setInterval(()=>{
                element.scrollLeft=element.scrollLeft+step
                scrollval=scrollval+Math.abs(step)

                if(scrollval>=distance){
                    clearInterval(timer)
                }
                if(element.scrollLeft===0){
                    setbtndisable(true)
                }
                else{
                    setbtndisable(false)
                }
            },speed)
        }
    
    return(
        <div className={styles.scrollbar}>
            {/* {array.map((item,i)=><Matchcard key={i}/>)} */}    
            <div className={styles.scrollbar__content} ref={val=>obj.current=val}>
                {array.map((item,i)=><Matchcard key={i}/>)}
            </div>
            <div className={styles.scrollbar_btndivone}>
                <button className={styles.scrollbar_btn} onClick={()=>{
                    console.log('obj.current', obj.current)
                    scroll(obj.current,30,396,-10)
                }} disabled={btndisable}>
                    <img src='/Leftarrow.png'/>
                </button>
            </div>
            <div className={styles.scrollbar_btndivtwo}>
                <button className={styles.scrollbar_btn} onClick={()=>{
                        console.log('obj.current', obj.current)
                        scroll(obj.current,30,396,10)
                        }} ><img src='/Rightarrow.png'></img>
                </button>
            </div>
        </div>
        
    )
    
}

export default Scrollbarmain;
