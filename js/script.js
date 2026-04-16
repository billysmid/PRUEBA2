// Manejo del Buscador
function searchFunction() {
    const input = document.getElementById('searchInput').value;
    if(input) {
        alert("Buscando: " + input);
    }
}

// Mostrar Modal de Solicitud
function showModal(actionName) {
    const modal = document.getElementById('modal');
    const text = document.getElementById('modal-text');
    
    text.innerHTML = Estamos procesando: <strong>${actionName}</strong>;
    modal.style.display = 'flex';
}

// Mostrar Modal de Llamada
function showCallModal() {
    const modal = document.getElementById('modal');
    const text = document.getElementById('modal-text');
    
    text.innerHTML = Conectando con un agente en menos de 30 segundos... <br><small>Simulación activa</small>;
    modal.style.display = 'flex';
}

// Cerrar Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Evento para cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
