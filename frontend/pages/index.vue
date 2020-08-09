<template>
  <div class="container">
    <div>
      <div class="col">
        <div class="card">
          <img :src="`${pet.imageUrl}`" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ pet.name }}</h5>
            <p class="card-text">{{ pet.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  },
  async asyncData(context) {
    try {
      return await fetch("http://127.0.0.1:3333/api/pet")
        .then(res => res.json())
        .then(data => {
          let { pets } = data;
          console.info(pets);
          return { pets };
        });
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
  },
  data() {
    return {
      pets: []
    };
  }
};
</script>
