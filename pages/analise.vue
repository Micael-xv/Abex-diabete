<template>
  <v-app style="background-color: #fefefe">
    <v-row>
      <v-col class="d-flex align-center">
        <v-card
          class="mx-auto my-8"
          elevation="16"
          width="400"
          height="630"
          rounded="xl"
        >
          <v-card-item>
            <v-card-title class="d-flex justify-center mb-9">
              Análise de Diabetes
            </v-card-title>
          </v-card-item>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field
                v-model="form.Age"
                density="compact"
                label="Idade"
                variant="outlined"
                type="number"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.Insulin"
                density="compact"
                label="Insulina"
                variant="outlined"
                type="number"
              />
            </v-col>
          </v-row>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field
                v-model="form.Pregnancies"
                density="compact"
                label="Gravidez"
                variant="outlined"
                type="number"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.BMI"
                density="compact"
                label="IMC"
                variant="outlined"
                type="number"
              />
            </v-col>
          </v-row>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field
                v-model="form.Glucose"
                density="compact"
                label="Glicose"
                variant="outlined"
                type="number"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.SkinThickness"
                density="compact"
                label="Espessura da pele"
                variant="outlined"
                type="number"
              />
            </v-col>
          </v-row>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field
                v-model="form.BloodPressure"
                density="compact"
                label="Pressão arterial"
                variant="outlined"
                type="number"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="form.DPF"
                density="compact"
                label="DPF"
                variant="outlined"
                type="number"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-btn color="secondary mb-8" @click="sendPredictionRequest">
                Previsão
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field
                v-model="result"
                density="compact"
                label="Resultado"
                variant="outlined"
                disabled
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-btn class="mt-n3">
                Saber mais sobre diabetes
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="mr-9 d-flex align-center">
        <v-card
          class="mx-auto my-8"
          elevation="16"
          width="730"
          rounded="xl"
        >
          <v-card-item>
            <v-card-title class="d-flex justify-center mb-9">
              Sobre os parâmetros
            </v-card-title>
            <v-row>
              <v-col>
                <p>Idade: A idade do paciente. A idade é um fator de risco porque a probabilidade de desenvolver diabetes aumenta à medida que envelhecemos.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Gravidezes: O número de vezes que a paciente esteve grávida. A gravidez pode afetar a sensibilidade à insulina e um número maior de gestações pode indicar um risco maior de desenvolver diabetes.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Glicose: Concentração de glicose plasmática após um teste oral de tolerância à glicose de 2 horas. Níveis elevados de glicose são um indicador primário de diabetes.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Pressão Arterial: Pressão arterial diastólica (mm Hg). A hipertensão arterial está associada a um risco aumentado de diabetes e suas complicações.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Insulina: Insulina sérica de 2 horas (mu U/ml). Níveis anormais de insulina podem ser um sinal de resistência à insulina, uma condição frequentemente associada ao diabetes.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>IMC: Índice de Massa Corporal (peso em kg/(altura em m)^2). Valores mais elevados de IMC indicam obesidade, que é um importante fator de risco para diabetes.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Espessura da Pele: Espessura da prega cutânea do tríceps (mm). Essa medida pode indicar a distribuição da gordura corporal, que está relacionada ao risco de diabetes.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>DPF: Função Pedigree do Diabetes. Esta função estima o impacto genético no diabetes considerando o histórico familiar, ajudando a compreender o risco hereditário.</p>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";

// Dados do formulário
const form = ref({
  Age: null,
  Pregnancies: null,
  Glucose: null,
  BloodPressure: null,
  SkinThickness: null,
  Insulin: null,
  BMI: null,
  DPF: null,
});

// Resultado da previsão
const result = ref("");

// Obter instância da API Flask
const { $aiApi } = useNuxtApp();

// Função para enviar os dados à API e obter a previsão
const sendPredictionRequest = async () => {
  try {
    const response = await $aiApi.post("http://127.0.0.1:8000/predict", form.value);
    result.value = `Previsão: ${response.prediction === 1 ? "Diabetes" : "Sem Diabetes"}`;
  } catch (error) {
    console.error("Erro na previsão:", error);
    result.value = "Erro ao obter previsão.";
  }
};
</script>
