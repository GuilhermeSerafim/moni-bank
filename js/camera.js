const botaoIniciarCamera = document.querySelector('[data-video-botao');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('data-video');

botaoIniciarCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video: true,  audio: false}) //solicitei apenas o video

    botaoIniciarCamera.style.display = "none"; //quando inicializar a camera, ele desaparece da tela
    campoCamera.style.display = "block"; //ou seja, no lugar do botaoIniciarCamera, o campoCamera aparece

    video.srcObject = iniciarVideo;
})