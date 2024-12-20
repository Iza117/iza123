const { createApp } = Vue;

createApp({
  data() {
    return {
      selectedAnimalType: "",
      animals: []
    };
  },
  methods: {
    async fetchAnimals() {
      this.animals = [];
      if (this.selectedAnimalType) {
        try {
          const response = await fetch(`${this.selectedAnimalType}.json`);
          if (response.ok) {
            this.animals = await response.json();
          } else {
            console.error("Erro ao carregar os dados:", response.statusText);
          }
        } catch (error) {
          console.error("Erro ao carregar os dados:", error);
        }
      }
    }
  }
}).mount("#app");