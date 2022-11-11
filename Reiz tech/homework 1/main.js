/*i save the object in a const to use it*/ 
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
//here i ask to the user the data.
const hours = prompt('introduce the hour');

const mins = prompt('introduce the minutes');

const seconds = prompt('introduce the seconds');

//here i use the data entered by the user know where move the arrows
const hourDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
const minsDegrees = ((mins/ 60) * 360) + ((seconds/60)*6)+90;
const secondsDegrees=((seconds/60) * 360) + 90;
//here i move the arrows.
hourHand.style.transform = `rotate(${hourDegrees}deg)`
minsHand.style.transform = `rotate(${minsDegrees}deg)`;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Utility function to find minimum of two integers
function findMin(x, y)
{
    return (x < y)? x: y;
     
}
 //function to calc the angle and degrees
function calcAngle(h, m)
{
    // validate the input
    if (h <0 || m < 0 || h >12 || m > 60)
       console.error("Wrong input");
 
    if (h == 12) h = 0;
    if (m == 60)
    {
    m = 0;
    h += 1;
    if(h>12)
        h = h-12;
    }
 
    // Calculate the angles moved
    // by hour and minute hands
    // with reference to 12:00
    let hour_angle = 0.5 * (h * 60 + m);
    let minute_angle = 6 * m;
 
    // Find the difference between two angles
    let angle = Math.abs(hour_angle - minute_angle);
 
    // Return the smaller angle of two possible angles
    angle = findMin(360 - angle, angle);
    return angle;
}

console.log(calcAngle(9,00))
console.log(calcAngle(hours,mins))
   
     
  