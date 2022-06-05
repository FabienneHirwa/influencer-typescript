import React, { useState } from "react";

const Follow: React.FunctionComponent = () => {
  const [clickedButton, setClickedButton, ] = useState('Follow');
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let myCountHtml = document.getElementById('count_p') as HTMLInputElement;
    // var count:number = parseInt(document.getElementById('count_p')!.innerHTML)
    const button: HTMLButtonElement = event.currentTarget;
    if (clickedButton === 'Follow') {
      setClickedButton('Following');
      myCountHtml.innerHTML = `${parseInt(myCountHtml.innerHTML)+1}` 
    }else{
      setClickedButton('Follow');
      myCountHtml.innerHTML = `${parseInt(myCountHtml.innerHTML)-1}` 
    }
    
  };
    return (
      <>
      
       {
        clickedButton === "Follow" ?
        <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={buttonHandler}> Follow</button>
        :
        <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={buttonHandler} > Following</button>
        
      }
       
      </>
    );
  }

  export default Follow;