<template>
  <v-app style="background-color: #fefefe">
    <v-row>
      <v-col>
        <v-card
          class="mx-auto my-8"
          elevation="16"
          width="400"
          rounded="xl"
        >
          <v-card-item>
            <v-card-title class="d-flex justify-center mb-9">
              Analise de Diabetes
            </v-card-title>
          </v-card-item>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field density="compact" label="Idade" variant="outlined"/>
            </v-col>
            <v-col>
              <v-text-field density="compact" label="Insulina" variant="outlined"/>
            </v-col>
          </v-row>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field density="compact" label="Gravidez" variant="outlined"/>
            </v-col>
            <v-col>
              <v-text-field density="compact" label="IMC" variant="outlined"/>
            </v-col>
          </v-row>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field density="compact" label="Glicose" variant="outlined"/>
            </v-col>
            <v-col>
              <v-text-field density="compact" label="Espessura da pele" variant="outlined"/>
            </v-col>
          </v-row>
          <v-row class="pa-3 mt-n9">
            <v-col>
              <v-text-field density="compact" label="Pressão arterial" variant="outlined"/>
            </v-col>
            <v-col>
              <v-text-field density="compact" label="DPF" variant="outlined"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-btn color="secondary mb-8">
                Prediction
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="mr-9">
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