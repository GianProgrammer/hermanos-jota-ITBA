const productos = [
  {
    ruta: "img/Aparador Uspallata.png",
    nombre: "Aparador Uspallata",
    descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón.",
    medidas: "180 × 45 × 75 cm",
    materiales: "Nogal macizo FSC®, herrajes de latón",
    acabado: "Aceite natural ecológico",
    peso: "68 kg",
    capacidad: "6 compartimentos interiores"
  },
  {
    ruta: "img/Biblioteca Recoleta.png",
    nombre: "Biblioteca Recoleta",
    descripcion: "Sistema modular de estantes abierto en acero Sage Green y repisas en roble claro. Versátil y elegante.",
    medidas: "100 × 35 × 200 cm",
    materiales: "Estructura de acero, estantes de roble",
    acabado: "Laca mate ecológica",
    capacidad: "45 kg por estante",
    modulares: "5 estantes ajustables"
  },
  {
    ruta: "img/Butaca Mendoza.png",
    nombre: "Butaca Mendoza",
    descripcion: "Butaca tapizada en bouclé Dusty Rose con base de guatambú. Respaldo curvo y diseño orgánico.",
    medidas: "80 × 75 × 85 cm",
    materiales: "Guatambú macizo, tela bouclé",
    acabado: "Cera vegetal, tapizado premium",
    tapizado: "Repelente al agua y manchas",
    confort: "Espuma alta densidad"
  },
  {
    nombre: "Sillón Copacabana",
    descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspiración brasilera moderna.",
    medidas: "90 × 85 × 95 cm",
    materiales: "Cuero curtido vegetal, acero pintado",
    acabado: "Cuero anilina premium",
    rotacion: "360° silenciosa y suave",
    garantia: "10 años en estructura"
  },
  {
    nombre: "Mesa de Centro Araucaria",
    descripcion: "Mesa de centro con sobre circular de mármol Patagonia y patas de nogal.",
    medidas: "90 × 90 × 45 cm",
    materiales: "Mármol Patagonia, nogal",
    acabado: "Mármol pulido, aceite natural en madera",
    peso: "42 kg",
    cargaMaxima: "25 kg distribuidos"
  },
  {
    nombre: "Mesa de Noche Aconcagua",
    descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble FSC®.",
    medidas: "45 × 35 × 60 cm",
    materiales: "Roble macizo FSC®, herrajes soft-close",
    acabado: "Barniz mate de poliuretano",
    almacenamiento: "1 cajón + repisa inferior",
    caracteristicas: "Cajón con cierre suave"
  },
  {
    nombre: "Cama Neuquén",
    descripcion: "Cama plataforma con cabecero flotante tapizado en lino natural.",
    medidas: "160 × 200 × 90 cm",
    materiales: "Roble macizo FSC®, tapizado lino",
    acabado: "Aceite natural, tapizado premium",
    colchon: "Compatible 160×200",
    caracteristicas: "Cabecero flotante acolchado"
  },
  {
    nombre: "Sofá Patagonia",
    descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas de madera.",
    medidas: "220 × 90 × 80 cm",
    estructura: "Madera de eucalipto FSC®",
    tapizado: "Lino 100% natural premium",
    relleno: "Espuma HR + plumón reciclado",
    sostenibilidad: "Materiales 100% reciclables"
  },
  {
    nombre: "Mesa Comedor Pampa",
    descripcion: "Mesa extensible de roble macizo con tablero biselado.",
    medidas: "160-240 × 90 × 75 cm",
    materiales: "Roble macizo FSC®, mecanismo alemán",
    acabado: "Aceite-cera natural",
    capacidad: "6-10 comensales",
    extension: "Sistema de mariposa central"
  },
  {
    nombre: "Sillas Córdoba",
    descripcion: "Set de cuatro sillas apilables en contrachapado de nogal y acero.",
    medidas: "45 × 52 × 80 cm (cada una)",
    materiales: "Contrachapado nogal, tubo de acero",
    acabado: "Laca mate, pintura epoxi",
    apilables: "Hasta 6 sillas",
    incluye: "Set de 4 sillas"
  },
  {
    nombre: "Escritorio Costa",
    descripcion: "Escritorio compacto con cajón y tapa pasacables en bambú laminado.",
    medidas: "120 × 60 × 75 cm",
    materiales: "Bambú laminado, herrajes ocultos",
    acabado: "Laca mate resistente",
    almacenamiento: "1 cajón con organizador",
    cables: "Pasacables integrado"
  },
  {
    nombre: "Silla de Trabajo Belgrano",
    descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable.",
    medidas: "60 × 60 × 90-100 cm",
    materiales: "Malla técnica, tejido reciclado",
    acabado: "Base cromada, tapizado premium",
    regulacion: "Altura + inclinación respaldo",
    certificacion: "Ergonomía europea EN 1335"
  }
];


function renderizarProductos() {
  const destacados = productos.slice(0,3);
  const contenedor = document.querySelector('.prod-dest');
  contenedor.innerHTML = ""; // Limpia lo que haya

  destacados.forEach(prod => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    // Si tienes imágenes en tu array, aquí las usarías.
    // Por ahora dejo una imagen genérica.
    card.innerHTML = `
      <img src="${prod.ruta}" class="card-img-top" alt="${prod.nombre}">
      <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <p class="card-text">${prod.descripcion}</p>
        <p><b>Medidas:</b> ${prod.medidas}</p>
        <a href="#" class="btn btn-primary">Ver más</a>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderizarProductos);
