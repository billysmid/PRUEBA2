import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "onboarding-caja-los-andes.firebaseapp.com",
    projectId: "onboarding-caja-los-andes",
    storageBucket: "onboarding-caja-los-andes.appspot.com",
    messagingSenderId: "TU_ID",
    appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function abrirFeedback(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById("feedbackModal");
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function cerrarModal() {
    const modal = document.getElementById("feedbackModal");
    const formulario = document.getElementById("formFeedback");

    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = "auto";
    }
    
    if (formulario) {
        formulario.reset(); 
        console.log("Formulario limpiado.");
    }
}
[3:24 p.m., 16/4/2026] Mi Fresita🍓❤️: :root {
    --primary-blue: #0056b3;
    --light-blue: #eef4ff;
    --dark-text: #333;
    --gray-text: #666;
    --border-color: #ddd;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    background-color: #f9f9f9;
    color: var(--dark-text);
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Banner */
.hero-banner {
    background: linear-gradient(90deg, #f1c40f 0%, #3498db 50%, #2980b9 100%);
    padding: 40px 0;
    color: white;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo-icon {
    font-size: 3rem;
    color: #f1c40f;
}

.hero-banner h1 { margin: 0; font-size: 1.8rem; }
.hero-banner p { margin: 5px 0 0; opacity: 0.9; }

.intro-text {
    text-align: center;
    margin: 30px 0;
    color: var(--gray-text);
}

/* Buscador */
.search-container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.search-box {
    display: flex;
    width: 100%;
    max-width: 600px;
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    padding: 5px 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.search-box input {
    border: none;
    flex-grow: 1;
    padding: 10px;
    outline: none;
    font-size: 1rem;
}

.search-box button {
    border: none;
    background: none;
    color: var(--primary-blue);
    cursor: pointer;
    font-size: 1.2rem;
}

/* Layout Grid */
.main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

h2 {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

/* Acordeón y Listas */
.accordion-item, .action-item {
    background: white;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.action-item { border: none; background: transparent; border-bottom: 1px solid #eee; border-radius: 0; }
.action-item:hover { background-color: #f5f5f5; }

.accordion-header {
    background: none; border: none; width: 100%; text-align: left;
    display: flex; justify-content: space-between; font-size: 1rem;
}

/* Botón Llamar */
.btn-call {
    width: 100%;
    padding: 15px;
    background-color: var(--primary-blue);
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
}

/* Modales */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    justify-content: center; align-items: center;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    width: 90%;
    max-width: 400px;
}

.success-icon {
    background: #4caf50;
    color: white;
    width: 60px; height: 60px;
    border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
    margin: 0 auto 15px;
    font-size: 2rem;
}

.btn-close {
    background: var(--primary-blue);
    color: white; border: none; padding: 10px 30px;
    border-radius: 5px; cursor: pointer;
}

/* Colores de Iconos */
.red-icon { color: #e74c3c; }
.gold-icon { color: #f1c40f; }
.blue-icon { color: #3498db; }
[3:24 p.m., 16/4/2026] Mi Fresita🍓❤️: :root {
    --primary-blue: #0056b3;
    --light-blue: #eef4ff;
    --dark-text: #333;
    --gray-text: #666;
    --border-color: #ddd;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    background-color: #f9f9f9;
    color: var(--dark-text);
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Banner */
.hero-banner {
    background: linear-gradient(90deg, #f1c40f 0%, #3498db 50%, #2980b9 100%);
    padding: 40px 0;
    color: white;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo-icon {
    font-size: 3rem;
    color: #f1c40f;
}

.hero-banner h1 { margin: 0; font-size: 1.8rem; }
.hero-banner p { margin: 5px 0 0; opacity: 0.9; }

.intro-text {
Css
[3:24 p.m., 16/4/2026] Mi Fresita🍓❤️: Script.js
[3:24 p.m., 16/4/2026] Mi Fresita🍓❤️: // Manejo del Buscador
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

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn-feedback");
    const span = document.querySelector(".close-modal");
    const modal = document.getElementById("feedbackModal");

    if (btn) btn.onclick = abrirFeedback;

    if (span) span.onclick = cerrarModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            cerrarModal();
        }
    };
});

// --- ENVÍO A FIREBASE ---
const formFeedback = document.getElementById("formFeedback");
if (formFeedback) {
    formFeedback.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const boton = e.target.querySelector('button');
        boton.innerText = "ENVIANDO...";
        boton.disabled = true;

        try {
            await addDoc(collection(db, "feedback"), {
                semana: document.getElementById("semana").value,
                estado: document.getElementById("estado").value,
                desafio: document.getElementById("desafio").value,
                ayuda: document.getElementById("ayuda").value,
                comentarios: document.getElementById("comentarios").value,
                timestamp: new Date()
            });

            alert("¡Feedback enviado con éxito!");
            cerrarModal(); 

        } catch (error) {
            console.error("Error al guardar:", error);
            alert("No se pudo enviar. Revisa la consola.");
        } finally {
            boton.innerText = "ENVIAR";
            boton.disabled = false;
        }
    });
}
