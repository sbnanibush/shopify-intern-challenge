// ------------------------------------------
// TRYING MY BEST
// ------------------------------------------

// Form submit event
const submitForm = document.getElementById("spookyForm");
submitForm.addEventListener("submit", function(event){
  event.preventDefault();
  console.log('yay');

  const data = {
    prompt: "Topic: Water\nTwo Sentence Horror Story: \n\nOne day, a group of people were sitting around a pond when they noticed that the water was getting murky. They began to notice strange things happening in the water, such as fish swimming in circles. Finally, one of the woman stepped into the water and quickly disappeared.",
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  }});
  //Get Text Prompt
  //send request to openai with prompt value
  let spookyForm = document.getElementById('spookyForm');
  let spookyFormData = new FormData(submitForm)
  fetch ('https://api.openai.com/v1/engines/text-curie-001/completions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify(data),
   });

//update the DOM with prompt/response
const input = document.getElementById("prompt");
     function send('') {
       console.log(input.value);
     }
