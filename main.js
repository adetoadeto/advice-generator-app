let adviceId = $("#advice-number");
let quote = $("#quote");

async function getAdvice () {
    try {
        const responseData = await axios.get('https://api.adviceslip.com/advice');
        const id = responseData.data.slip.id;
        const advice = responseData.data.slip.advice;

        adviceId.text(`advice #${id}`);
        quote.html(`<q>${advice}</q>`);
    }
   
    catch (error) {
        console.log(error);
    };
}

getAdvice();