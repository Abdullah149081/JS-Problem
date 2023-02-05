/* 

Sample Data

Input = Output
-------------------
50 =   0

55    = 1250
    
112   = 250
   
235   = 500
   
365   = 1000

*/

function publicBusFare(picnicParticipant) {
  if (typeof picnicParticipant != "number" || picnicParticipant < 50) {
    return "Provide Valid Participant";
  }

  let BusCapacity = 50;
  let microBusCapacity = 11;
  let publicBusCost = 250;
  let remaining = 0;

  //   Bus Capacity Check
  remaining = picnicParticipant % BusCapacity;

  //   MicroBus Capacity Check

  remaining = remaining % microBusCapacity;

  let publicBus = remaining * publicBusCost;

  return publicBus;
}

let result = publicBusFare(55);
console.log(result);
