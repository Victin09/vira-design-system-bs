<template>
  <div>
    <router-view />

    <div id="offcanvas" vds-offcanvas="mode: push; overlay: true">
      <div class="vds-offcanvas-bar">
        <div class="vds-panel">
          <ul class="vds-nav vds-nav-default tm-nav">
            <li class="vds-nav-header">General</li>
            <router-link tag="li" to="index">
              <a>Home</a>
            </router-link>
            <router-link tag="li" to="pro">
              <a>Pro</a>
            </router-link>
            <router-link tag="li" to="changelog">
              <a>Changelog</a>
            </router-link>
            <router-link tag="li" to="download">
              <a>Download</a>
            </router-link>
          </ul>

          <ul
            v-for="(pages, category) in navigation"
            :key="category"
            class="vds-nav vds-nav-default tm-nav vds-margin-top"
          >
            <li class="vds-nav-header">
              {{ category }}
            </li>
            <li v-for="(p, label) in pages" :key="p">
              <a :href="`docs/${p}`">{{ label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
