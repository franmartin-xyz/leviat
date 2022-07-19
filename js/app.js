const form = document.getElementById("formulario");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const res = await fetch("https://sheet.best/api/sheets/3ef02a39-63e8-4855-961f-e99a0117a15f",{
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            "Nombre":form.nombre.value,
            "Cantidad":form.cantidad.value,
            "RRPP":form.rrpp.value,
        })
    });
    registro.classList.remove("activo");
    exito.classList.add("activo");
})