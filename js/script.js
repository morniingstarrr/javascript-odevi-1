let firstName = prompt("Lütfen adınızı girin: ") // İsim girmemizi isteyen prompt
let greeting = document.querySelector("#myName") // DOM öğemizi seçiyoruz
let body = document.querySelector(".bg-dark") // eğer isim girilmez ise düzenlemek istediğim DOM öğesini seçtim

// isim girilmediği durumda görüntülenecek DOM öğesine style verdim
body.style.color = "orange"
body.style.textAlign = "center"
body.style.fontSize = "20px"

greeting.innerHTML = `${firstName}` // DOM öğesinin değerini prompt'a girilen değere eşitledim.

if (!firstName) {
    body.innerHTML= "Lütfen isim kısmını boş bırakmayın" // isim girilmediği takdirde  Body öğesini bir uyarı yazısıyla değiştirdim
}