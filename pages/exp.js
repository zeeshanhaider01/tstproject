import React, { useState } from "react";
// import "./App.css";

function Exp() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById("container");
    const containerScrollWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;

    if (direction === "left") {
      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - containerWidth);
        container.scrollTo({ left: scrollPosition - containerWidth, behavior: "smooth" });
      }
    } else if (direction === "right") {
      if (scrollPosition < containerScrollWidth - containerWidth) {
        setScrollPosition(scrollPosition + containerWidth);
        container.scrollTo({ left: scrollPosition + containerWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="App">
      <div className="container" id="container">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
        <div className="item">Item 9</div>
        <div className="item">Item 10</div>
      </div>
      <div className="button-container">
        <button onClick={() => handleScroll("left")}>{"<"}</button>
        <button onClick={() => handleScroll("right")}>{">"}</button>
      </div>
    </div>
  );
}

export default Exp;








// import React, { useState, useRef } from "react";

// function HorizontalScrollBar(props) {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const containerRef = useRef(null);

//   const scrollLeft = () => {
//     containerRef.current.scrollLeft -= props.scrollAmount;
//     setScrollPosition(containerRef.current.scrollLeft);
//   };

//   const scrollRight = () => {
//     containerRef.current.scrollLeft += props.scrollAmount;
//     setScrollPosition(containerRef.current.scrollLeft);
//   };

//   return (
//     <div className="scroll-container">
//       <div
//         className="scroll-content"
//         ref={containerRef}
//         onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
//       >
//         {props.children}
//       </div>
//       {scrollPosition > 0 && (
//         <button className="scroll-button" onClick={scrollLeft}>
//           {"<"}
//         </button>
//       )}
//       {containerRef.current &&
//         scrollPosition < containerRef.current.scrollWidth - containerRef.current.clientWidth && (
//           <button className="scroll-button" onClick={scrollRight}>
//             {">"}
//           </button>
//         )}
//     </div>
//   );
// }

// export default HorizontalScrollBar;










// // import { Col,Row } from 'antd';
// // import styles from '../styles/Home.module.css';

// // function Exp() {
    
// //     return(
// //     <div style={{display:'flex',alignItems:'center'}}>
// //         <Row gutter={{xs: 8,sm: 16,md: 24,lg: 49}}>  
// //             <Col className={styles.parent}>
// //             <a className={styles.child}>HOME</a>
// //             </Col>
// //             <Col className={styles.parent}>
// //             <a className={styles.child}>Series</a>
// //             </Col>
// //             <Col className={styles.parent}>
// //             <a className={styles.child}>Ranking</a> 
// //             </Col>
// //             <Col className={styles.parent}>
// //                 <a className={styles.child}>Blogs</a>
// //             </Col>
// //             <Col className={styles.parent}>
// //             <a className={styles.child}>News</a>
// //             </Col>
// //             <Col className={styles.parent}>
// //                 <a className={styles.child} href="https://nextjs.org">How to play</a>
// //             </Col>
// //             <Col className={styles.parent}>
// //             <a className={styles.child} href="https://nextjs.org">Login</a>
// //             </Col>
// //         </Row>
// //     </div>  
// //     )
// // }
// // export default Exp;

