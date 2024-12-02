<template>
  <v-app class="diabetes-info">
    <h1 class="title">Tipos Comuns de Diabetes</h1>

    <div class="section">
      <h2 class="section-title">Tipos de Diabetes</h2>
      <div class="type-card">
        <h3 class="type-title">Tipo 1</h3>
        <p>
          O diabetes tipo 1 é uma doença crônica e hereditária que afeta cerca de 5% a 10% dos diabéticos no Brasil. Ele se manifesta na infância ou adolescência e exige o uso diário de insulina.
        </p>
        <ul>
          <li>Tratamento: Insulina e/ou medicamentos</li>
          <li>Prevenção: Vida saudável, alimentação equilibrada, atividades físicas</li>
        </ul>
      </div>

      <div class="type-card">
        <h3 class="type-title">Tipo 2</h3>
        <p>
          O diabetes tipo 2 ocorre quando o corpo não utiliza a insulina adequadamente. Está frequentemente relacionado ao sobrepeso e sedentarismo.
        </p>
        <ul>
          <li>Tratamento: Controle de glicose, dieta, medicamentos</li>
          <li>Prevenção: Exercícios, controle de peso</li>
        </ul>
      </div>

      <div class="type-card">
        <h3 class="type-title">Diabetes Latente Autoimune do Adulto (LADA)</h3>
        <p class="color-text">
          Atinge adultos e é um agravamento do diabetes tipo 2, com um processo autoimune que ataca as células do pâncreas.
        </p>
      </div>

      <div class="type-card">
        <h3 class="type-title">Pré-diabetes</h3>
        <p class="color-text">
          Quando os níveis de glicose estão elevados, mas não a ponto de caracterizar o diabetes. Pode ser revertido com mudanças de estilo de vida.
        </p>
      </div>

      <div class="type-card">
        <h3 class="type-title">Diabetes Gestacional</h3>
        <p class="color-text">
          Ocorre durante a gravidez e pode aumentar o risco de complicações para a mãe e o bebê, além de aumentar o risco de diabetes no futuro.
        </p>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Sintomas Comuns</h2>
      <div class="symptom-card">
        <h3 class="symptom-title">Sintomas do Tipo 1</h3>
        <ul>
          <li>Fome frequente</li>
          <li>Sede constante</li>
          <li>Vontade de urinar várias vezes ao dia</li>
          <li>Perda de peso</li>
          <li>Fraqueza, fadiga</li>
          <li>Mudanças de humor</li>
          <li>Náusea e vômito</li>
        </ul>
      </div>

      <div class="symptom-card">
        <h3 class="symptom-title">Sintomas do Tipo 2</h3>
        <ul>
          <li>Fome frequente</li>
          <li>Sede constante</li>
          <li>Formigamento nas mãos e pés</li>
          <li>Vontade de urinar várias vezes ao dia</li>
          <li>Infecções frequentes</li>
          <li>Feridas que demoram a cicatrizar</li>
          <li>Visão embaçada</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Fatores de Risco</h2>
      <ul class="risk-factors">
        <li>Diagnóstico de pré-diabetes</li>
        <li>Pressão alta</li>
        <li>Colesterol elevado ou triglicerídeos altos</li>
        <li>Sobrepeso, especialmente na região da cintura</li>
        <li>Histórico familiar de diabetes</li>
        <li>Doenças renais crônicas</li>
        <li>Síndrome de ovários policísticos</li>
        <li>Uso de glicocorticoides</li>
      </ul>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DiabetesInfo',
};
</script>

<style scoped>
.diabetes-info {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  overflow-y: auto; /* Permite rolagem vertical */
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 100vh; /* Garante que a página ocupe toda a altura */
}
.color-text {
  color: #333;
}

.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 1.5rem;
  color: #007BFF;
  margin-bottom: 15px;
}

.type-card,
.symptom-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.type-title,
.symptom-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 10px;
}

.type-card ul,
.symptom-card ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #333; /* Garante que o texto das listas seja visível */
}

.risk-factors {
  list-style-type: square;
  margin-left: 20px;
  color: #333; /* Garante que o texto da lista de fatores de risco seja visível */
}
</style>
