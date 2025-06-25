// CONTADOR DE ANIVERSARIO
function actualizarContador() {
    const fechaAniversario = new Date('2024-06-25T00:00:00'); // Cambia a tu fecha
    const ahora = new Date();
    const diferencia = ahora - fechaAniversario;
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
    document.getElementById('contador-carta').textContent = dias;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// CARRUSEL DE FOTOS
document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel');
    const imagenes = document.querySelectorAll('.carrusel img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicadoresContainer = document.getElementById('indicadores');
    
    let currentIndex = 0;
    const totalImagenes = imagenes.length;
    
    // Crear indicadores
    imagenes.forEach((_, index) => {
        const indicador = document.createElement('div');
        indicador.classList.add('indicador');
        if (index === 0) indicador.classList.add('activo');
        indicador.addEventListener('click', () => {
            goToImage(index);
        });
        indicadoresContainer.appendChild(indicador);
    });
    
    // Función para actualizar el carrusel
    function updateCarrusel() {
        carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar indicadores
        document.querySelectorAll('.indicador').forEach((ind, index) => {
            ind.classList.toggle('activo', index === currentIndex);
        });
    }
    
    // Navegación
    function goToImage(index) {
        currentIndex = (index + totalImagenes) % totalImagenes;
        updateCarrusel();
    }
    
    prevBtn.addEventListener('click', () => {
        goToImage(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToImage(currentIndex + 1);
    });
    
    // Autoplay (opcional)
    let autoplay = setInterval(() => {
        goToImage(currentIndex + 1);
    }, 5000);
    
    // Pausar autoplay al interactuar
    carrusel.addEventListener('mouseenter', () => {
        clearInterval(autoplay);
    });
    
    carrusel.addEventListener('mouseleave', () => {
        autoplay = setInterval(() => {
            goToImage(currentIndex + 1);
        }, 5000);
    });
});

// EFECTO DE CONFETI
document.getElementById('btn-confetti').addEventListener('click', function() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F3B5C7', '#C9B6E6', '#F8E1F4', '#FFFFFF']
    });
});

// Confeti al cargar la página (ligero)
window.addEventListener('load', function() {
    confetti({
        particleCount: 30,
        spread: 100,
        origin: { y: 0.6 }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.querySelector('.carrusel');
    const imagenes = document.querySelectorAll('.carrusel img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicadoresContainer = document.getElementById('indicadores');
    
    let currentIndex = 0;
    const totalImagenes = imagenes.length;
    
    // Crear indicadores
    function crearIndicadores() {
        indicadoresContainer.innerHTML = '';
        for (let i = 0; i < totalImagenes; i++) {
            const indicador = document.createElement('div');
            indicador.classList.add('indicador');
            if (i === 0) indicador.classList.add('activo');
            indicador.addEventListener('click', () => goToImage(i));
            indicadoresContainer.appendChild(indicador);
        }
    }
    
    // Actualizar carrusel
    function updateCarrusel() {
        carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar indicadores
        document.querySelectorAll('.indicador').forEach((ind, index) => {
            ind.classList.toggle('activo', index === currentIndex);
        });
    }
    
    // Navegación
    function goToImage(index) {
        currentIndex = (index + totalImagenes) % totalImagenes;
        updateCarrusel();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => goToImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToImage(currentIndex + 1));
    
    // Inicializar
    crearIndicadores();
    updateCarrusel();
    
    // Autoplay (opcional)
    let autoplay = setInterval(() => goToImage(currentIndex + 1), 5000);
    
    // Pausar al interactuar
    carrusel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carrusel.addEventListener('mouseleave', () => {
        autoplay = setInterval(() => goToImage(currentIndex + 1), 5000);
    });
});