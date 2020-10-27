const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../chirps.json');

//entiretyofsaoarray is chirper but from sao perspective bc we need more fun in coding and life
//also the timeline is destoryed bc its been a while since ive watched so dont bother with the dates on these lol

const theEntiretyOfSAOArray = [{
    name: 'Kirito',
    chirp: 'Im having such a fun time in aincrad, what a fun world to be in'
},

{
    name: 'whoever said this',
    chirp: 'oh god oh no we cant get out unless we beat the game someone help'
},
{
    name: 'Kirito',
    chirp: 'dont worry chief im a pro gamer i got this'
},
{
    name: 'kirito',
    chirp: '*proceeds to play the game and win in a total of about 2 years ez'
},
{
    name: 'kirito',
    chirp: '*literally watches as his friends die around him'
},
{
    name: 'Narrarator',
    chirp: '*The PKers are still after him multiple years later because they value nothing but killing'
},
{
    name: 'kirito',
    chirp: 'OH WOW A NEW VRMMO, TIME FOR ME TO NOT HAVE A LIFE AND HOP INTO YET ANOTHER VRMMO THAT LITERALLY CAUSED ME TO HAVE PTSD'
},
{
    name: 'narrartor',
    chirp: '*literally does exactly that'
},
{
    name: 'Narrartor',
    chirp: '*Literally saves his egirl after spending months after full dive w/o her while pulling ANOTHER egirl even though he still loves his original egirl'
},
{
    name: 'kirito',
    chirp: 'OH WOW I GOT HIRED BY THE GOVERNMENT TO DIVE INTO ANOTHER VRMMO TO SEE IF A CERTAIN "DEATHGUN" IS KILLING PLAYERS IN REAL LIFE'
},
{
    name: 'Narrrator',
    chirp: '*literally hops in and finds out everything ab it in 2 days, proving just how much better a single person can do instead of govenrment lol'
},
{
    name: 'kirito',
    chirp: 'HEY @JAPANGOV, THE GUY IS WORKING WITH SOMEONE ON THE OUTSIDE TO KILL THE TARGET ON THE INSIDE BY TIME AND ALL THESE OTHER FANCY SPECIFICS I DONT FEEL LIKE TYPING OUT.'
},
{
    name: 'Narrartor',
    chirp: '*he saves another egirl and bam thats sao 1&2 for ya'
}];
    let randomvariablename = JSON.stringify(theEntiretyOfSAOArray)
    fs.writeFileSync(dataPath, randomvariablename )



//wasn't needed for localally made info (array)

// let theEntiretyofSAOData = JSON.parse(theEntiretyOfSAOArray)
// theEntiretyofSAOData.data.children.forEach(item => {
    //  theEntiretyOfSAOArray.push({
    //      name : item.data.name,
    //     chirp : item.data.chirp 
    //  })

// }) 