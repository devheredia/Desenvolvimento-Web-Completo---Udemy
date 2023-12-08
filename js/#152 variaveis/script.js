//alert(`Olá, seja bem vindo ao curso!`);
document.getElementById(`nome`).value = `Oi`;

function rp_info(titulo, texto, icon, time) {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icon,
        showConfirmButton: false,
        timer: time,
        onOpen: () => {
            document.body.classList.add('body-overlay');
        },
        onClose: () => {
            document.body.classList.remove('body-overlay');
        }
    });
}

window.onload = function() {
    rp_info(`Oportunidades`, `Todo responsável adicionado será notificado a cada inserção de oportunidade ou inserção de formulários.`, `info`, 4000);
};