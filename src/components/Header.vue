<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <router-link
        class="navbar-brand"
        to="/"
      >
        <img
          src="@/assets/logo-light.png"
          alt="Logo"
        >
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ms-auto row gx-2 align-items-center">
          <li class="nav-item col-auto">
            <router-link
              to="/"
              class="btn btn-outline-primary btn-header"
            >
              <i class="fas fa-bicycle" />
              找單車
            </router-link>
          </li>
          <li class="nav-item col-auto">
            <router-link
              to="/"
              class="btn btn-outline-primary btn-header"
            >
              <i class="fas fa-route" />
              找路線
            </router-link>
          </li>
          <li class="nav-item col-auto">
            <router-link
              to="/"
              class="btn btn-outline-primary btn-header"
            >
              <i class="fas fa-umbrella-beach" />
              找景點
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
