export const getformatedDate = (date) => {

  const createdAt = new Date(date)
  let d = createdAt.getDate();
  let m = createdAt.getMonth();
  let y = createdAt.getFullYear();
  return `${d}/ ${m}/ ${y}`
}
export const dayPassed = (date) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let date1 = new Date(date)
  const date2 = new Date()
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export const ROLES = {
  creator: 'creator',
  manager: 'manager',
  developer: 'developer'
}

export function splitArrayBasedOnProp(arr, prop) {
  const arr1 = [];
  const arr2 = [];
  arr.forEach(elm => {
    elm[prop] ? arr1.push(elm) : arr2.push(elm)
  })
  return [arr1, arr2]
}

 export function splitTicketsDataBasedOnIsDone (arr){
  //arr:[{tasks:[], tickets:[{
// createdAt: "2021-12-11T16:18:09.444Z"
  // creator: "61b33b7f6b385c03e7737b3d"
  // description: "dexcrip"
  // developer: "61b33aac6b385c03e7737b3b"
  // isDone: true
  // number: "1"
  // project: "61b4cc8b31b80fbffd5d80f8"
  // updatedAt: "2021-12-11T16:22:57.000Z"
  // __v: 0
//  }]}]
console.log("splitting ...")
  let done=[];
  let wip=[];
  arr.forEach(elm=>{
     let topush={tasks:[...elm.tasks], ticket:elm.ticket}
      elm.ticket.isDone? done.push(topush) : wip.push(topush)
  })
  console.log("splitTicketsDataBasedOnIsDone -done:", done ," wip: ",  wip)
  return {done, wip}
 }