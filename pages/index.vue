<template>
  <v-app class="background-white">
    <v-container>
      <v-row justify="center" align="center" style="min-height: 100vh;">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <h1 class="welcome-title">Bem-vindo ao teste de Diabetes</h1>
          <p class="welcome-subtitle">
            Faça login abaixo para acessar sua conta e aproveitar nossos serviços.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" style="min-height: 100vh;">
        <v-col>
          <v-card
            class="mx-auto pa-12 pb-8"
            elevation="4"
            max-width="448"
            rounded="lg"
          >
            <h2 class="text-center">Acesse sua conta</h2>
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
            <v-text-field
              v-model="sigin.email"
              density="compact"
              placeholder="Email address"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
            />

            <v-text-field
              v-model="sigin.senha"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Enter your password"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
            />
  
            <v-btn
              class="mb-8 mt-6"
              color="blue"
              size="large"
              variant="tonal"
              block
              rounded="xl"
              elevation="1"
              @click="pegaToken"
            >
              Entrar
            </v-btn>
  
            <v-card-text class="text-center">
              <v-btn
                class="text-blue text-decoration-none mt-n2"
                rel="noopener noreferrer"
                variant="tonal"
                elevation="1"
                rounded="xl"
                to="/cadastro/"
              >
                Inscreva-se agora <v-icon icon="mdi-chevron-right" />
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
definePageMeta({
  layout: "forget",
});
export default {
  name: "IndexPage",
  data: () => ({
    visible: false,
    sigin: {
      email: "",
      senha: "",
    },
  }),
  methods: {
    async pegaToken() {
      if (this.sigin.email && this.sigin.senha) {
        try {
          const response = await this.$api.post(`/usuario/login`, {
            ...this.sigin,
          });
          if (response.token) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
            setTimeout(() => {
              this.$router.push("/analise").then(() => {
                window.location.reload();
              });
            }, 2000);
          }
        } catch (error) {
          this.$toast.error("Erro ao fazer login. Por favor, tente novamente.");
        }
      } else {
        this.$toast.error("Por favor, preencha todos os campos.");
      }
    },
  },
};
</script>

<style scoped>
.background-white {
  background-color: white;
  min-height: 100vh;
  min-width: 100vh;
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.welcome-subtitle {
  font-size: 1.25rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}
</style>
