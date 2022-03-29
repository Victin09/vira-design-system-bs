<template>
  <div class="vds-section-primary tm-section-texture">
    <navbar class="vds-navbar-transparent" />

    <div
      class="vds-section vds-flex vds-flex-middle vds-text-center"
      vds-height-viewport="offset-top: true"
    >
      <div class="vds-width-1-1">
        <div class="vds-container">
          <p class="vds-margin-large-bottom">
            <canvas
              style="color: #fff"
              width="142"
              height="117"
              vds-svg
              src="./images/download.svg"
            ></canvas>
          </p>

          <h1>Thanks for giving ViraDesignSystem a try.</h1>

          <p class="vds-margin-medium-bottom vds-text-large">
            Please support our open source project and share the love on<br
              class="vds-visible@s"
            />
            Twitter or Facebook. It would really mean a lot to us.
          </p>

          <div
            class="vds-grid-medium vds-child-width-auto vds-flex-inline"
            vds-grid
          >
            <div>
              <a
                class="vds-button vds-button-primary tm-button-primary vds-button-large"
                href="https://twitter.com/intent/tweet?text=I'm+excited+to+try+@getvds,+a+modern+front-end+framework.+Check+it+out+at+https%3a%2f%2fgetvds.com"
                target="_blank"
              >
                <span class="vds-margin-small-right" vds-icon="twitter"></span>
                <span class="vds-text-middle">Share on Twitter</span>
              </a>
            </div>
            <div>
              <a
                class="vds-button vds-button-primary tm-button-primary vds-button-large"
                href="https://www.facebook.com/sharer/sharer.php?u=https://getvds.com"
                target="_blank"
              >
                <span class="vds-margin-small-right" vds-icon="facebook"></span>
                <span class="vds-text-middle">Post on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const response = await fetch("assets/vds/package.json");
    const { version } = await response.json();
    setTimeout(
      () =>
        (location.href = `https://github.com/vds/vds/releases/download/v${version}/vds-${version}.zip`),
      100
    );
  },
};
</script>
