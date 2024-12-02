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
          <v-list-item prepend-icon="mdi-home" to="/" title="Home" value="home"/>
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