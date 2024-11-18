<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        theme="dark"
      >
        <v-list>
          <v-list-item
            prepend-avatar="algo"
            subtitle="algo"
            title="algo"
          />
        </v-list>

        <v-divider/>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" to="/" title="Home" value="home"/>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh; background-color: black">
        <slot/>
      </v-main>
    </v-layout>
  </v-card>
</template>