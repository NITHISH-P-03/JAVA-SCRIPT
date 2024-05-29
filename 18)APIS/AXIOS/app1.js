//we can send the headers with api request
const url="https://icanhazdadjoke.com/";

async function getjokes() {
    try{
        const config={headers: {Accept:"application/json"}};
        let res=await axios.get(url);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

getjokes();