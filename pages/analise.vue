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
                <p>Gravidez: O número de vezes que a paciente esteve grávida. A gravidez pode afetar a sensibilidade à insulina e um número maior de gestações pode indicar um risco maior de desenvolver diabetes.</p>
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

    <v-dialog v-model="showDialog" rounded="xl" max-width="600">
      <v-card>
        <v-card-title class="text-h6 d-flex justify-center">
          Cuidados com a diabetes
        </v-card-title>
        <v-card-text>
          <p>Escolhas saudáveis: O paciente portador de diabetes deve fazer escolhas saudáveis para sua alimentação. Opte por alimentos mais naturais como vegetais, frutas, sementes e grãos. Evitando assim consumir com frequência alimentos processados e refinados que aumentam a glicemia.</p>
          <p>Cuide com o açúcar: O excesso de ingestão de açúcar pode desregular a glicemia, resultando em possíveis complicações da doença. Evite alimentos, como sobremesas, feitos com açúcar refinado. Na vontade de um docinho, escolha uma fruta da estação, elas são mais doces e de fácil acesso (lembrando que é uma porção por vez).</p>
          <p>Consumo de frutas: As frutas podem e devem ser consumidas mesmo por quem tem diabetes, mas a recomendação é uma por vez, podendo comer de 3 a 5 por dia (qualquer fruta da sua preferência).</p>
          <p>Se alimente regularmente: Sugere-se que a pessoa com diabetes não deve permanecer muito tempo sem se alimentar. Respeite os sinais do seu organismo e faça refeições em intervalos regulares. Isso evita picos de hipoglicemia e hiperglicemia.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="showDialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

const result = ref("");

const { $aiApi } = useNuxtApp();

const sendPredictionRequest = async () => {
  try {
    if (!form.value.Age || !form.value.Pregnancies || !form.value.Glucose || !form.value.BloodPressure || !form.value.SkinThickness || !form.value.Insulin || !form.value.BMI || !form.value.DPF) {
      result.value = "Preencha todos os campos.";
      return;
    }
    const response = await $aiApi.post("http://127.0.0.1:8000/predict", form.value);
    result.value = `Previsão: ${response.prediction === 1 ? "Diabetes" : "Sem Diabetes"}`;
  } catch (error) {
    console.error("Erro na previsão:", error);
    result.value = "Erro ao obter previsão.";
  }
};
</script>

<script>
export default {
  data() {
    return {
      showDialog: false,
    };
  },
};
</script>