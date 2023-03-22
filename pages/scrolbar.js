import styles from '../styles/Home.module.css';
import Matchcard from './matchcard.js';

function Scrollbarmain(){

    const array=[1,2,3,4,5,6]
    function scrolleft(){
        document.getElementById('content').scrollleft+=20
    }
    function scrolright(){
        document.getElementById('content').scrolright+=20
    }
    return(
        <div className={styles.scrollbar}>
            {/* {array.map((item,i)=><Matchcard key={i}/>)} */}    
            <div id='content' className={styles.scrollbar__content}>
                {array.map((item,i)=><Matchcard key={i}/>)}
            </div>
            {/* <button id="slideLeft" onClick={scrolleft} type="button">Slide left</button>
            <button id="slideRight" onClick={scrolright} type="button">Slide right</button> */}
        </div>
        
    )
    
}

export default Scrollbarmain;
