<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item has-background-black" href="https://bulma.io">
      <img src="./../assets/logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <router-link to="/">
            <p class="navbar-item is-size-5">Characters</p>
        </router-link>
        <router-link to="/locations">
            <p class="navbar-item is-size-5">Locations</p>
        </router-link>
         <router-link to="/episodes">
            <p class="navbar-item is-size-5">Episodes</p>
        </router-link>
    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> -->
  </div>
</nav>
</template>