<template>
  <div>
    <div
      class="vds-navbar-container tm-navbar-container"
      vds-sticky="media: 960"
    >
      <div class="vds-container vds-container-expand">
        <nav class="vds-navbar">
          <div class="vds-navbar-left">
            <a href="../" class="vds-navbar-item vds-logo">
              <img
                class="vds-margin-small-right"
                vds-svg
                :src="'../images/vds-logo.svg'"
              />
              Vira Design System
            </a>
          </div>

          <div class="vds-navbar-right">
            <ul class="vds-navbar-nav vds-visible@m">
              <li class="vds-active">
                <a href="./">Documentation</a>
              </li>
              <li><a href="../changelog">Changelog</a></li>
            </ul>
            <a
              class="vds-navbar-toggle vds-hidden@m"
              vds-navbar-toggle-icon
              href="#offcanvas"
              vds-toggle
            ></a>
          </div>
        </nav>
      </div>
    </div>

    <div class="tm-sidebar-left vds-visible@m">
      <h3>Documentation</h3>

      <ul
        v-for="(pages, category, index) in navigation"
        :key="category"
        class="vds-nav vds-nav-default tm-nav"
        :class="{ 'vds-margin-top': index }"
      >
        <li class="vds-nav-header">
          {{ category }}
        </li>
        <router-link v-for="(p, label) in pages" :key="p" tag="li" :to="p">
          <a>{{ label }}</a>
        </router-link>
      </ul>
    </div>

    <div class="tm-main vds-section vds-section-default">
      <div class="vds-container vds-container-small vds-position-relative">
        <router-view />

        <div class="tm-sidebar-right vds-visible@l">
          <div vds-sticky="offset: 160">
            <ul
              class="vds-nav vds-nav-default tm-nav vds-nav-parent-icon"
              vds-scrollspy-nav="closest: li; scroll: true; offset: 100"
            >
              <li v-for="(id, subject) in ids" :key="id">
                <a :href="`#${id}`">{{ subject }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="offcanvas" vds-offcanvas="mode: push; overlay: true">
      <div class="vds-offcanvas-bar">
        <div class="vds-panel">
          <ul class="vds-nav vds-nav-default tm-nav">
            <li class="vds-nav-header">General</li>
            <li><a href="../index">Home</a></li>
            <li><a href="../changelog">Changelog</a></li>
          </ul>

          <ul
            v-for="(pages, category) in navigation"
            :key="category"
            class="vds-nav vds-nav-default tm-nav vds-margin-top"
          >
            <li class="vds-nav-header">
              {{ category }}
            </li>
            <router-link v-for="(p, label) in pages" :key="p" tag="li" :to="p">
              <a>{{ label }}</a>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
