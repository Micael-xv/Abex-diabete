<template>
  <div class="register-page">
    <v-container>
      <v-card class="mx-auto" max-width="400" elevation="4">
        <v-card-title class="text-h5 text-center">Cadastro de Usuário</v-card-title>

        <v-card-text>
          <v-form ref="registerForm">
            <v-text-field
              v-model="registeruser.nome"
              label="Nome Completo"
              variant="underlined"
              color="primary"
              required
            />

            <v-text-field
              v-model="registeruser.sobrenome"
              label="Sobrenome"
              variant="underlined"
              color="primary"
              required
            />

            <v-text-field
              v-model="registeruser.cpf"
              v-mask="['###.###.###-##']"
              label="CPF"
              variant="underlined"
              color="primary"
              required
            />

            <v-text-field
              v-model="registeruser.telefone"
              v-mask="['(##) ####-####', '(##) #####-####']"
              label="Telefone"
              variant="underlined"
              color="primary"
              required
            />

            <v-text-field
              v-model="registeruser.email"
              label="Email"
              variant="underlined"
              color="primary"
              required
            />

            <v-text-field
              v-model="registeruser.senha"
              label="Senha"
              type="password"
              variant="underlined"
              color="primary"
              placeholder="Digite sua senha"
              required
            />

            <v-checkbox
              v-model="terms"
              label="Aceito os termos e condições"
              color="secondary"
            />
          </v-form>
        </v-card-text>

        <v-divider />

        <v-card-actions class="d-flex justify-space-between">
          <v-btn to="/" variant="tonal" class="text-none">
            Voltar
          </v-btn>
          <v-btn
            :disabled="!terms"
            variant="tonal"
            class="text-none"
            @click="register"
          >
            Concluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
definePageMeta({
  layout: "forget",
});

export default {
  name: "Cadastro",
  directives: { mask },

  data() {
    return {
      terms: false,
      registeruser: {
        nome: "",
        sobrenome: "",
        cpf: "",
        telefone: "",
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    async register() {
      if (!this.$refs.registerForm.validate() || !this.terms) {
        this.$toast.error("Preencha todos os campos e concorde com os termos!");
        return;
      }
      try {
        const response = await this.$api.post("/usuario/persist", this.registeruser);
        if (response.type === "error") {
          throw new Error("Erro ao cadastrar usuário");
        }
        this.$toast.success("Usuário cadastrado com sucesso!");
        this.$router.push("/index");
      } catch (error) {
        this.$toast.error(error.message || "Erro ao cadastrar usuário!");
      }
    },
  },
};
</script>

<style scoped>
.register-page {
  background-color: #fefefe;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
