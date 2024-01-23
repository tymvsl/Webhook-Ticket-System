  /* 
  
  Open Source Web Ticketing System v1.0

  Made By Payson Holmes

  https://github.com/paysonism

  If you use this in your site, please at least give
  credit in your source code. Thx :)
  
  */

function send()
{
    const name = document.getElementById('name'); // Their name
    const msg = document.getElementById('msg'); // The message
    const title = document.getElementById('gay'); // The site title text

    const xmlrequest = new XMLHttpRequest();
    xmlrequest.open("POST", "https://discord.com/api/webhooks/1199420827339341874/ZjJyv3xb__Xg6A0c1ZZN0ueOAVjl7IH5oxk7QtcA7OedMx_ZHE3ztkugyyCrwhBTKogm");

    xmlrequest.setRequestHeader('Content-type', 'application/json');

    const message = {
      username: "Ticket System", // the username u want for the webhook
      avatar_url: "", // url for what u want the avatar to be (optional)
      content: "@everyone New Ticket\n\nName: " + name.value + "\n\nMessage: ```" + msg.value + "```" // message content
    }

    xmlrequest.send(JSON.stringify(message)); // send the message

    var ms1 = 1000; // time of the delay

    setTimeout(function() { // delay actions by the value of ms1
        var p = document.getElementById("gay"); // website title text
        p.style.color = 'green'; // change the color
        p.textContent = "Success"; // set the text
    }, ms1); 	 

    var ms2 = 5000; // time of second delay

    setTimeout(function() { // delay actions by the value of ms2
        var p = document.getElementById("gay"); // website title text
        p.style.color = 'black'; // change the color back to black
        p.textContent = "Webhook Ticketing System"; // change it to the original text
    }, ms2); 	 
}

const cmds = {
    creds() {
        console.log("Made By Payson Holmes\n\nhttps://github.com/paysonism");
    },
    discord() {
        console.log("SubZero Discord\n\nhttps://discord.gg/fngg");
    },
    github() {
        console.log("https://github.com/paysonism");
    },
    site() {
        console.log("https://subfn.cc/");
    },
};
