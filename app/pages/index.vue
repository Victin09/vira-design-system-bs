<template>
  <div class="vds-section-primary tm-section-texture">
    <navbar class="vds-navbar-transparent" />

    <div
      class="vds-section vds-section-small vds-flex vds-flex-middle vds-text-center"
      vds-height-viewport="offset-top: true; offset-bottom: true"
    >
      <div class="vds-width-1-1">
        <div class="vds-container">

          <p class="vds-margin-medium vds-text-lead">
            A lightweight and modular front-end framework<br
              class="vds-visible@s"
            />
            for developing fast and powerful web interfaces.
          </p>

          <div
            class="vds-child-width-auto vds-grid-medium vds-flex-inline vds-flex-center"
            vds-grid
          >
            <div>
              <a
                class="vds-button vds-button-primary tm-button-primary vds-button-large tm-button-large vds-visible@s"
                href="docs/introduction"
                >Get Started</a
              >
              <a
                class="vds-button vds-button-primary tm-button-primary vds-hidden@s"
                href="docs/introduction"
                >Get Started</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    stargazers_count: 17380,
    version: "3.12.0",
  }),

  mounted() {
    fetch("https://api.github.com/repos/vds/vds").then(
      async (response) =>
        (this.stargazers_count = (await response.json()).stargazers_count),
      () => {}
    );

    fetch("assets/vds/package.json").then(
      async (response) => (this.version = (await response.json()).version)
    );
  },
};
</script>
