document.getElementById("envio-form").addEventListener("click", function() {
    document.getElementById("cargando_img").style.display = "block"; 
    setTimeout(() => {
        document.getElementById("cargando_img").style.display = "none";
        document.getElementById("enviado_txt").style.display = "block";
        $form.reset();

        setTimeout(() => document.getElementById("enviado_txt").style.display = "block", 3000);
    }, 3000);  
}
);