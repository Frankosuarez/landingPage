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
  
    const inscripcionLinks = [
      'https://drive.google.com/file/d/1hy85EldKwshN8YbBfOXo8CHPcaJPdSPL/view?usp=sharing',
      'https://drive.google.com/file/d/1kLJT_OloB1yznUkwe0a2Zsjz3VQYJt3h/view?usp=sharing',
      'https://drive.google.com/file/d/1lB9fNxMWr8zJroFjYnkBiCAY4NoyYfoY/view?usp=sharing',
      'https://drive.google.com/file/d/1RZsRj2ep2KuZezVRSzXt-rXDYZI3cjzg/view?usp=sharing',
      'https://drive.google.com/file/d/10J_D4vgcY8nGj5pbI9ey1D3HL8H7_lxR/view?usp=sharing',
      'https://drive.google.com/file/d/1OT8Vqg96OWkyQl4fMY0raqS9i4EhegyM/view?usp=sharing',
      'https://drive.google.com/file/d/1bPo5p4rIYZ-qu5OiDjZ0Z3f9aFuiSuLD/view?usp=sharing'
    ];
  
    carreras.forEach(function(carrera, index) {
      const carrerasListItem = document.createElement("li");
      carrerasListItem.textContent = carrera;
      carrerasList.appendChild(carrerasListItem);
  
      const inscripcionListItem = document.createElement("li");
      const inscripcionLink = document.createElement("a");
  
      inscripcionLink.href = inscripcionLinks[index];
      inscripcionLink.textContent = ` ${carrera}`;
      inscripcionListItem.appendChild(inscripcionLink);
      inscripcionList.appendChild(inscripcionListItem);
    });
  });
