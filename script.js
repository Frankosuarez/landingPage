document.addEventListener("DOMContentLoaded", function() {
    const carreras = [
      "Tecnicatura Superior en Análisis de Sistemas",
      "Tecnicatura Superior en Gestión Ambiental",
      "Tecnicatura Superior en Emergencias de Salud",
      "Tecnicatura Superior en Logística",
      "Tecnicatura Superior en Turismo"
      // Agrega más carreras aquí según sea necesario
    ];
  
    const carrerasList = document.getElementById("carreras-list");
    const inscripcionList = document.getElementById("inscripcion-list");
  
    carreras.forEach(function(carrera) {
      const carrerasListItem = document.createElement("li");
      carrerasListItem.textContent = carrera;
      carrerasList.appendChild(carrerasListItem);
  
      const inscripcionListItem = document.createElement("li");
      const inscripcionLink = document.createElement("a");
      inscripcionLink.href = `formulario_${carrera.toLowerCase().replace(/ /g, "_")}.html`;
      inscripcionListItem.appendChild(inscripcionLink);
      inscripcionList.appendChild(inscripcionListItem);
    });
  }); 
