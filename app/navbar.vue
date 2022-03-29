<template>
  <div class="vds-navbar-container tm-navbar-container" vds-sticky="media: 960">
    <div class="vds-container vds-container-expand">
      <nav class="vds-navbar">
        <div class="vds-navbar-left">
          <router-link class="vds-navbar-item vds-logo" to="/">
            <canvas
              class="vds-margin-small-right"
              width="28"
              height="34"
              vds-svg
              src="./images/vds-logo.svg"
            ></canvas>
            Vira Design System
          </router-link>
        </div>

        <div class="vds-navbar-right">
          <ul class="vds-navbar-nav vds-visible@m">
            <li><a href="docs/introduction">Documentation</a></li>
            <router-link to="/changelog" tag="li">
              <a>Changelog</a>
            </router-link>
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
</template>
