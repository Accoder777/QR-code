// const qrText = document.querySelector('.qrText')
// const qrImage = document.querySelector('.qrImage')
// const btn = document.querySelector('.btn')

// // console.log(qrText)
// const notfoud = 'https://cdn.dribbble.com/users/1569423/screenshots/3336565/ym_404_s_s.gif'
// // function qrGenerate(){
// //     let qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}
// //     `;
    
// //     qrImage.src = qrCode;
// // }

// btn.addEventListener('click',()=>{
//     if(qrText.value.length > 0){
//         let qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
//         qrImage.src = qrCode;
//         // console.log(qrCode)
//     }
//     else{
//         qrImage.src = notfound;

//     }
// })










const qrText = document.querySelector('.qrText');
const qrImage = document.querySelector('.qrImage');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container')

const notFound = 'https://cdn.dribbble.com/users/1569423/screenshots/3336565/ym_404_s_s.gif';

btn.addEventListener('click', () => {
    if (qrText.value.length > 0) {
        let qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        qrImage.src = qrCode;
        // console.log(qrCode)
        container.classList.add('p0')
    } else {
        qrImage.src = notFound;
    }
});
