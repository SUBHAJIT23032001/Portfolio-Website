function SendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        SecureToken: "1676b35e-f681-4e02-be94-a627d7a5fd1c",
        Username : "spati711@gmail.com",
        Password : "4B3C825D42C00897B905A165BA1C3872D379",
        To : 'subhajit.pati.uemk.csit.2023@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Message",
        Body :"Name: "+ document.getElementById("name").value 
        +"<br> Email: "+ document.getElementById("email").value
        +"<br> Phone No: " +document.getElementById("Phone").value
        +"<br> Message: " +document.getElementById("message").value
    }).then(
    message => alert("Message sent succesfully")
    );
  }
  var typed = new Typed('#element', {
    strings: ['I am a passionate programmer ', 'I am B.tech graduate','scroll down to know more'],
    typeSpeed: 50,
  });
