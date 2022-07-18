
// async function newFormHandler(event) {
//     event.preventDefault();
  
//     const title = document.querySelector('input[name="post-title"]').value;
//     const content = document.querySelector('input[name="post-content"]').value;
  
//     const response = await fetch(`/api/posts`, {
        
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             content,
//         }),
//         headers: {
//         'Content-Type': 'application/json'
//         },
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
// }
  
// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

document
.getElementById("new-post-form")
.addEventListener("submit", function (evt) {
evt.preventDefault();

const title = document.querySelector('input[name="post-title"]').value;
const content = document.querySelector('input[name="post-content"]').value;

fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    }).then(() => {
      document.location.replace("/dashboard");
  });

 // alert("form submitted");
});