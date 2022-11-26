import React from "react";

import GithubCalender from "react-github-calendar" ;
import ReactTooltip from "react-tooltip";

const calendar = () =>{

   const selectLastHalfYear = (contributions) =>{
    const currentYear =  new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const showMonths = 10;
   

    return contributions.filter(( day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - showMonths &&
                monthOfDay <= currentMonth 
            )
    })
 }



return (
    <div>
        <GithubCalender style={{margin : "auto"}}
        username = "SanketPaharia"
        transformData={selectLastHalfYear}
        blockSize ={20}
        fontSize={20} >
            <ReactTooltip delayShow={20} html/>
         </GithubCalender>

    </div>
)

}

export default calendar ;