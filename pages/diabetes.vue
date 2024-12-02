<template>
  <v-app class="diabetes-info">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-4 mb-6">
            <v-card-title class="text-h5 text-center">
              Tipos mais comuns de diabetes
            </v-card-title>
            <v-card-text>
              O diabetes mellitus pode se apresentar de diversas formas e possui
              diversos tipos diferentes. Independente do tipo de diabetes, com
              aparecimento de qualquer sintoma é fundamental que o paciente
              procure com urgência o atendimento médico especializado para dar
              início ao tratamento.
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Tipo 1 -->
        <v-col cols="12" md="6">
          <v-card class="pa-4 mb-6">
            <v-card-title class="text-h6">Tipo 1</v-card-title>
            <v-card-text>
              Sabe-se que, via de regra, é uma doença crônica não transmissível,
              hereditária, que concentra entre 5% e 10% do total de diabéticos
              no Brasil. Ele se manifesta mais frequentemente em adultos, mas
              crianças também podem apresentar.
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Tipo 2 -->
        <v-col cols="12" md="6">
          <v-card class="pa-4 mb-6">
            <v-card-title class="text-h6">Tipo 2</v-card-title>
            <v-card-text>
              O diabetes tipo 2 ocorre quando o corpo não aproveita
              adequadamente a insulina produzida. A causa do diabetes tipo 2
              está diretamente relacionada ao sobrepeso, sedentarismo e hábitos
              alimentares inadequados.
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Diabetes Gestacional -->
        <v-col cols="12" md="6">
          <v-card class="pa-4 mb-6">
            <v-card-title class="text-h6">Diabetes gestacional</v-card-title>
            <v-card-text>
              Ocorre temporariamente durante a gravidez. As taxas de açúcar no
              sangue ficam acima do normal, mas ainda abaixo do valor para ser
              classificada como diabetes tipo 2.
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Sintomas Comuns -->
        <v-col cols="12">
          <v-card class="pa-4 mb-6">
            <v-card-title class="text-h6">Sintomas Comuns</v-card-title>
            <v-card-text>
              <h3 class="text-h6 mb-2">Sintomas do Tipo 1:</h3>
              <v-list dense>
                <v-list-item v-for="(symptom, index) in type1Symptoms" :key="index">
                  <v-list-item-icon>
                    <v-icon color="blue">mdi-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ symptom }}</v-list-item-title>
                </v-list-item>
              </v-list>
              <h3 class="text-h6 mt-4 mb-2">Sintomas do Tipo 2:</h3>
              <v-list dense>
                <v-list-item v-for="(symptom, index) in type2Symptoms" :key="index">
                  <v-list-item-icon>
                    <v-icon color="blue">mdi-check</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ symptom }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Fatores de Risco -->
        <v-col cols="12">
          <v-card class="pa-4">
            <v-card-title class="text-h6">Fatores de Risco</v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item v-for="(risk, index) in riskFactors" :key="index">
                  <v-list-item-icon>
                    <v-icon color="red">mdi-alert</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ risk }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "DiabetesInfo",
  data() {
    return {
      type1Symptoms: [
        "Fome frequente",
        "Sede constante",
        "Vontade de urinar várias vezes ao dia",
        "Perda de peso",
        "Fraqueza, fadiga",
        "Mudanças de humor",
        "Náusea e vômito",
      ],
      type2Symptoms: [
        "Fome frequente",
        "Sede constante",
        "Formigamento nas mãos e pés",
        "Vontade de urinar várias vezes ao dia",
        "Infecções frequentes",
        "Feridas que demoram a cicatrizar",
        "Visão embaçada",
      ],
      riskFactors: [
        "Diagnóstico de pré-diabetes",
        "Pressão alta",
        "Colesterol elevado ou triglicerídeos altos",
        "Sobrepeso, especialmente na região da cintura",
        "Histórico familiar de diabetes",
        "Doenças renais crônicas",
        "Síndrome de ovários policísticos",
        "Uso de glicocorticoides",
      ],
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.diabetes-info {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-top: 20px;
  overflow-y: auto;
}
</style>
