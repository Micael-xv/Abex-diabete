<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        theme="dark"
      >
        <v-divider/>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-logout" @click="logout" title="Sair" value="Sair"/>
          <v-list-item prepend-icon="mdi mdi-diabetes" to="/analise" title="Analise de Diabetes" value="Analise"/>
          <v-list-item prepend-icon="mdi mdi-text-box-search-outline" to="/diabetes" title="Sobre Diabetes" value="Sobre Diabetes"/>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh; background-color: black">
        <slot/>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'DefaultLayout',
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
}
</script>