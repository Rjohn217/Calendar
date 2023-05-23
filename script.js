//continue tutorial at 15:00

const currentDate = document.querySelector(".current-date");

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalender = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    
    for(let i = 1; i <= lastDateofMonth; i++) {
        console.log(i);
    }

    currentDate.innerText = `${currMonth} ${currYear}`;
}
renderCalender();