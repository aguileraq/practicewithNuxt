<!-- ./layouts/default.vue -->

<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <nuxt-link to="/" class="navbar-brand">
          <img
            src="https://www.graphicsprings.com/filestorage/stencils/f6e5c06cad423f0f7e6cae51c7a41f37.svg"
            alt="Logo: an image of a doggy biting a juicy bone!"
            width="112"
            height="28"
          />
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <nuxt-link
                active-class="active"
                to="/"
                class="nav-link"
                aria-current="page"
                exact
                >Home</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                active-class="active"
                to="/pet/create"
                class="nav-link"
                exact
                >Add one 😎</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
