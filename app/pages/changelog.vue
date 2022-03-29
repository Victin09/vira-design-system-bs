<template>
  <div class="vds-section-primary tm-section-texture vds-preserve-color">
    <navbar
      class="vds-light"
      vds-sticky="media: 960;show-on-up: true;animation: vds-animation-slide-top;cls-inactive: vds-navbar-transparent;top: 400"
    />

    <div class="vds-section" vds-height-viewport="expand: true">
      <div class="vds-container vds-container-small">
        <div class="vds-card vds-card-default vds-card-body">
          <h1 class="vds-margin-medium vds-text-center">Changelog</h1>

          <div ref="changelog"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global marked */

export default {
  async mounted() {
    const response = await fetch("assets/vds/CHANGELOG.md?{{BUILD}}");
    this.$refs.changelog.innerHTML = this.parse(await response.text());
  },

  methods: {
    parse(markdown) {
      let section;
      const renderer = new marked.Renderer();

      renderer.list = (text) => `<ul class="vds-list">${text}</ul>`;

      renderer.listitem = function (text) {
        let label = "";

        switch (section) {
          case "Added":
            label = "vds-label-success";
            break;

          case "Removed":
          case "Deprecated":
            label = "vds-label-warning";
            break;

          case "Fixed":
          case "Security":
            label = "vds-label-danger";
        }

        return `<li class="vds-flex vds-flex-top">
                                <span class="vds-label ${label} vds-margin-right vds-text-center vds-width-small tm-label-changelog vds-flex-none">${section}</span>
                                <div>${text}</div>
                            </li>`;
      };

      renderer.heading = (text, level) => {
        text = text.replace(
          /\(.*?\)/,
          '<span class="vds-text-muted">$&</span>'
        );

        if (level === 2) {
          return "<h" + level + ' class="vds-h3">' + text + "</h" + level + ">";
        }

        if (level === 3) {
          section = text;
        }

        return "";
      };

      return marked(markdown, { renderer });
    },
  },
};
</script>
