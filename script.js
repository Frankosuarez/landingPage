document.addEventListener("DOMContentLoaded", function() {
    const carreras = [
      "Tecnicatura Superior en Analisis de Sistemas",
      "Tecnicatura Superior en Gestión Ambiental",
      "Tecnicatura Superior en Emergencias de Salud",
      "Tecnicatura Superior en Logística",
      "Tecnicatura Superior en Turismo",
      "Tecnicatura Superior en Acompañante Terapéutico",
      "Tecnicatura Superior en Industria Textil e Indumentaria"
    ];
  
    const carrerasList = document.getElementById("carreras-list");
    const inscripcionList = document.getElementById("inscripcion-list");
  
    // Ruta de la carpeta que contiene los PDF
    const pdfFolder = "pdfs/";

    // Crear la lista de carreras y enlaces de inscripción
    for (let i = 0; i < carreras.length; i++) {
        const carreraItem = document.createElement("li");
        const carreraLink = document.createElement("a");
        carreraLink.textContent = carreras[i];
        carreraLink.href = pdfFolder + carreras[i];
        carreraLink.target = "_blank"; // Abre enlace en una nueva pestaña
        carreraItem.appendChild(carreraLink);
        carrerasList.appendChild(carreraItem);
    }
});
