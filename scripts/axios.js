const { title } = require('process');


// 1. Get axios instance ready
function createAxios() {
    const axios = require('axios');
    
    return axios.create({withCredentials: true});
}
const axiosInstance = createAxios();

// 2. save the cookie after login.
// Using an object so that the reference to the cookie is always the same.
const cookieJar = {
    myCookies: undefined,
};

// save ZAPI power guide linup hash 
const pghash = {
    myPghash: "",
};

const channelCid = {
    myCid: "",
};



// 3. save  MetaData after request.
const obj = {
    channelName: "",
    showName: "",
    nextshowName: "",
 };


 //Init. Unix timestamp
 start = new Date(); 
 end = new Date();
 end.setHours(end.getHours()+15);
 start.setHours(start.getHours()+13);

 //Hello ZAPI
 //request Cookie 
async function login() 
{
    var FormData = require('form-data');
    var data = new FormData();
    data.append('app_tid', 'SECRET.json');
    data.append('uuid', 'SECRET.json');
    data.append('lang', 'en');
    data.append('format', 'json');
    data.append('device_type', 'samsung test device');
    data.append('app_version', '1.0.0');

    var config = {
    headers: { 
        ...data.getHeaders()
    },
    data : data
    }; 

    const response = await axiosInstance.post('https://zapi.zattoo.com/zapi/v2/session/hello', data, config);
    console.log(response.status);
    //console.log(JSON.stringify(response.data));
    cookieJar.myCookies = response.headers['set-cookie'];
    //const pghash= JSON.stringify(response.data.session.power_guide_hash);
    console.log(cookieJar.myCookies);
    //console.log(pghash);
    //console.log(response);
}

// 3. Login
//Add the saved cookie to the request.
async function request() {
    var FormData = require('form-data');
    var data = new FormData();
    data.append('login', 'c3');
    data.append('password', 'c345');
    
    var config = {
    headers: { 
        'Cookie': cookieJar.myCookies,
        ...data.getHeaders()
    },
    data : data
    };

    // read the cookie and set it in the headers
    const response = await axiosInstance.post('https://zapi.zattoo.com/zapi/v3/account/login', data, config);
    console.log(response.status);
    //console.log(JSON.stringify(response.data));   //hide response is too long
    cookieJar.myCookies = response.headers['set-cookie'];
    pghash.myPghash= JSON.stringify(response.data.lineup_hash);
    console.log(cookieJar.myCookies);
    console.log(pghash.myPghash);
    //console.log(response);
}
 
// GET channel line-up
async function getchanneldata() {


var config = {
   headers: { 
            'Cookie': cookieJar.myCookies            
    }
};

// read the cookie and set it in the headers
var response = await axiosInstance.get('https://zapi.zattoo.com/zapi//v4/cached/${pghash.myPghash}/channels', config);
console.log(response.status);
//console.log(JSON.stringify(response.data));   //hide response is too long
cookieJar.myCookies = response.headers['set-cookie'];
const channelName = response.data.channels[0].title;
obj.channelName = channelName;
const myCid  = response.data.channels[0].cid;
channelCid.myCid = myCid;
console.log(channelCid.myCid);
console.log(Object.values(channelCid));
}


 // GET current EPG data
async function getshowdata() {

var config = {
    headers: { 
            'Cookie': cookieJar.myCookies            
    },
    params: {
        start : parseInt(start.getTime()/1000),
        end   : parseInt(end.getTime()/1000),
        cids  : channelCid.myCid,   
    }
};

// read the cookie and set it in the headers
var response = await axiosInstance.get('https://zapi.zattoo.com/zapi/v3/cached/${pghash.myPghash}/guide', config);
console.log(response.status);
//console.log(JSON.stringify(response.data));
cookieJar.myCookies = response.headers['set-cookie'];
const showName = response.data.channels[channelCid.myCid][1].t;
const nextshowName = response.data.channels[channelCid.myCid][2].t;
obj.showName = showName;
obj.nextshowName = nextshowName;  
}


//Make data available through a json file
async function logdata() 
{

var fs = require('fs');
var fse = require('fs-extra');

const propertyValues = Object.values(obj);
console.log(propertyValues);
let data = fs.readFileSync('./users.json', 'utf-8');

var arrayOfObjects = JSON.parse(data);
arrayOfObjects.firstChannelMetadata.pop();
arrayOfObjects.firstChannelMetadata.push({
    channelName: obj.channelName,
    showName  : obj.showName,
    nextshowName : obj.nextshowName           
});

console.log(arrayOfObjects);
fs.writeFileSync('./users.json', JSON.stringify(arrayOfObjects), 'utf-8');


console.log("done");
 }
    
    

 login()
   .then(() => request())

   .then(() => getchanneldata())

   .then (() => getshowdata())

   .then(() => logdata());