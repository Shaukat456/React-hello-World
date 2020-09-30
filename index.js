import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoodMorning from './Pa.jsx'


let currentdate = new Date(); //year month day hours
currentdate = currentdate.getHours()
let n=prompt()
let greeting="";
const c={
  
}

  
    if (currentdate>= 5 && currentdate <12) {
       greeting='Good Morning'
       
    }
    else if (currentdate>= 13 && currentdate <18){
        greeting= 'GOOD Evening '
    }
    else{
        greeting= 'GOOD NIGHT' 
      }
    
ReactDOM.render(
  <>
    <h1>THIS APP WILL GREET YOU AS PER THE TIME </h1>
<h2 >hello and <span>{greeting}</span> {n}  </h2>
  {/* <input type='text' placeholder='NAME '></input>
  <input type='number' placeholder='Age'></input>
  <input type='text' placeholder='Class'></input>
  <input type='text' placeholder='Section'></input>
  <input type='textarea' placeholder='ANYTHING TO ASK' ></input>
  <input type='button' value='Hide Greeting' className='btn'></input> */}
    </>
    ,
 document.getElementById('root'));

//  const htwo=document.querySelector('h2');
// const btn=document.querySelector('.btn').addEventListener('click',()=>{
//     htwo.style.display='none'
// })

  


// // const first = 'DARK'
// // const second = '13 REASONS'
// // const third = 'cosmos'
// // const fourth = 'Breaking Bad'
// // // <>
// // //   <h1>NETFLIX RECOMMANDATIONS </h1>
// // //   <p>HERE ARE 4 OF MY TOP  LISTED SHOWS</p>
// // //   <ol>
// // //     <li> {first} </li>
// // //     <li>{second}
// // //     </li>  <li>{third}
// // //     </li> <li> {fourth}</li>
// // //   </ol>
// // // </>,
// // var cdate=new Date();

// // ReactDOM.render(
// //   <React.Fragment>   
// //   <h1> SHOUKAT</h1>,
// //   <Heading className='hh' /> <Heading/>

// //   <button>Submit</button>
// //   <img src='https://picsum.photos/200/300' alt='random_images'/> 
// //   </React.Fragment>,
// //   document.getElementById('root')
// // );

// ReactDom.render(<>
//     <ol>
//         <li>SUM OF TWO NUMBERS ARE {add(2,5)} </li>
// <li>SUB OF TWO NUMBERS ARE {Sub(20,5)}</li>
// <li>DIV OF TWO NUMBERS {div(2,5)}</li>
//         <li>MULTIPLICATION OF TWO NUMBERS ARE {Mul(2,6)}</li>
        
//     </ol>,
// </>,document.getElementById('root')
// )
// import './arithmetic'

// import add, { div, Mul, Sub }  from './arithmetic'



// import React from 'react'
// import ReactDom from 'react-dom'

// ReactDom.render(<>
//     { <div className='cards'>
//         <div className='card'>
//             <img 
//             src='https://unsplash.com/photos/h8nxGssjQXs    '
//             alt='random pic'
//             className='Card__img' 
//             />
//             <div className='card__info'>
//                 <span className='card__category'> A NETFLIX ORIGINAL SERIES </span>
//                 <a href='https://unsplash.com/photos/h8nxGssjQXs' target='_blank'>
//                     <button>Watch Now</button>
//                 </a>
//             </div>
//         </div>
//     </div> 
//     }
// </>,document.getElementById('root')
// );