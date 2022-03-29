<template>
  <div>
    <div class="vds-section-primary tm-section-intro">
      <navbar
        class="vds-light"
        vds-sticky="media: 960;show-on-up: true;animation: vds-animation-slide-top;cls-inactive: vds-navbar-transparent;top: 400"
      />

      <div class="vds-section vds-padding-remove-bottom">
        <div class="vds-container">
          <div class="" vds-grid>
            <div
              class="vds-width-1-3@l vds-width-expand@xl vds-text-center vds-text-left@l"
            >
              <div class="tm-intro-text vds-inline vds-width-xlarge">
                <h1 class="vds-h6 tm-h6 vds-margin-remove">YOOtheme Pro</h1>
                <h2 class="vds-h1 vds-margin-top vds-margin-medium-bottom">
                  A theme and page builder for WordPress &amp; Joomla from the
                  ViraDesignSystem creators
                </h2>

                <div
                  class="vds-grid-medium vds-flex-middle vds-flex-inline"
                  vds-grid
                >
                  <div>
                    <a
                      class="vds-button vds-button-default vds-button-large tm-button-primary tm-button-large vds-visible@s"
                      href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Buy+Top"
                      >Buy Now</a
                    >

                    <a
                      class="vds-button vds-button-default tm-button-primary vds-hidden@s"
                      href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Buy+Top"
                      >Buy Now</a
                    >
                  </div>
                  <div>
                    <a
                      class="vds-button vds-button-text"
                      href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Learn+Top"
                      >Learn More</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="vds-width-2-3@l vds-width-auto@xl vds-text-center">
              <div class="tm-intro-image">
                <div class="vds-inline">
                  <canvas v-show="!imgLoaded" width="960" height="670"></canvas>
                  <img
                    v-show="imgLoaded"
                    src="images/pro/device-laptop.png"
                    width="960"
                    height="670"
                    alt="Laptop Device"
                    @load="imgLoaded = true"
                  />
                  <div
                    style="position: absolute; top: 5%; left: 12%; right: 12%"
                  >
                    <img
                      src="images/pro/page-builder.gif"
                      width="730"
                      height="456"
                      alt="Animated Gif YOOtheme Pro Page Builder"
                      vds-gif
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="vds-section vds-section-large vds-section-default vds-padding-remove-top"
    >
      <div class="vds-container">
        <div class="vds-child-width-expand@m vds-child-width-1-2@s" vds-grid>
          <div>
            <h3 class="vds-h4">A perfect fit</h3>
            <p>
              Want to use ViraDesignSystem in your WordPress or Joomla website? YOOtheme
              Pro integrates it into everything – from menus and widgets to
              pages.
            </p>
          </div>
          <div>
            <h3 class="vds-h4">Page builder</h3>
            <p>
              Create websites on the fly with the drag and drop page builder. It
              generates perfect ViraDesignSystem markup, tailored for your needs.
            </p>
          </div>
          <div>
            <h3 class="vds-h4">Live preview</h3>
            <p>
              Customize every aspect of ViraDesignSystem visually, build and arrange your
              content, all in one comprehensive and intuitive interface.
            </p>
          </div>
          <div>
            <h3 class="vds-h4">Element library</h3>
            <p>
              Build pages with ready-to-use elements made from ViraDesignSystem components,
              like buttons, cards, accordions and much more.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="vds-container">
      <hr />
    </div>

    <div class="vds-section vds-section-default vds-section-large">
      <div class="vds-container">
        <div
          class="vds-grid-large vds-flex-middle vds-text-center vds-text-left@l"
          vds-grid
        >
          <div class="vds-width-1-3@l vds-flex-last@l">
            <div class="vds-inline vds-width-xlarge">
              <h1 class="vds-h6 tm-h6 vds-margin-remove">Style Customizer</h1>
              <h2 class="vds-h1 vds-margin-top">Create your style</h2>
              <p class="vds-text-large tm-text-large">
                Modify the visual appearance of your site – including colors,
                fonts, margins and other style related properties – with a
                sophisticated style customizer for ViraDesignSystem.
              </p>
            </div>
          </div>
          <div class="vds-width-2-3@l">
            <img
              class="tm-box-shadow-large"
              src="images/pro/style-customizer.gif"
              width="780"
              height="456"
              alt="Animated Gif YOOtheme Pro Style Customizer"
            />
          </div>
        </div>

        <div
          class="vds-width-xlarge vds-margin-auto vds-text-center vds-margin-large-bottom"
        >
          <h2 class="vds-text-center vds-margin-xlarge-top">
            Pre-built styles
          </h2>
          <p class="vds-text-large tm-text-large">
            Try out any of ViraDesignSystem theme with one click. You can switch between
            100+ styles from the library, and your content will adapt
            automatically.
          </p>
        </div>

        <div class="vds-child-width-1-4@m vds-child-width-1-2@s" vds-grid>
          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-line-gallery.jpg"
                width="1200"
                height="900"
                alt="Line Gallery Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/line-gallery/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-union-dental.jpg"
                width="1200"
                height="900"
                alt="Union Dental Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/union-dental/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-devstack.jpg"
                width="1200"
                height="900"
                alt="Devstack Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/devstack/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-design-escapes.jpg"
                width="1200"
                height="900"
                alt="Design Escapes Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/design-escapes/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-paladin.jpg"
                width="1200"
                height="900"
                alt="Paladin Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/paladin/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-kitchen-daily.jpg"
                width="1200"
                height="900"
                alt="Kitchen Daily Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/kitchen-daily/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-creative-hub.jpg"
                width="1200"
                height="900"
                alt="Creative Hub Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/creative-hub/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/style-tech-space.jpg"
                width="1200"
                height="900"
                alt="Tech Space Style"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/tech-space/"
                data-modal
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vds-container">
      <hr />
    </div>

    <div class="vds-section vds-section-default vds-section-large">
      <div class="vds-container">
        <div
          class="vds-width-xlarge vds-margin-auto vds-text-center vds-margin-large-bottom"
        >
          <h1 class="vds-h6 tm-h6 vds-margin-remove">The Layout Library</h1>
          <h2 class="vds-h1 vds-margin-top">Incredible layouts</h2>
          <p class="vds-text-large tm-text-large">
            Load existing layouts or create your own and save it to the library.
            Anything you can think of can be built with YOOtheme Pro.
          </p>
        </div>

        <div
          class="vds-child-width-1-5@m vds-child-width-1-3@s vds-child-width-1-2"
          vds-grid
        >
          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-line-gallery.jpg"
                width="800"
                height="1250"
                alt="Line Gallery Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/line-gallery/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-union-dental.jpg"
                width="800"
                height="1250"
                alt="Union Dental Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/union-dental/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-devstack.jpg"
                width="800"
                height="1250"
                alt="Devstack Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/devstack/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-design-escapes.jpg"
                width="800"
                height="1250"
                alt="Design Escapes Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/design-escapes/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-paladin.jpg"
                width="800"
                height="1250"
                alt="Paladin Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/paladin/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-kitchen-daily.jpg"
                width="800"
                height="1250"
                alt="Kitchen Daily Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/kitchen-daily/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-creative-hub.jpg"
                width="800"
                height="1250"
                alt="Creative Hub Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/creative-hub"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-tech-space.jpg"
                width="800"
                height="1250"
                alt="Tech Space Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/tech-space/"
                data-modal
              ></a>
            </div>
          </div>
          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-framerate.jpg"
                width="800"
                height="1250"
                alt="Framerate Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/framerate/"
                data-modal
              ></a>
            </div>
          </div>
          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-design-bites.jpg"
                width="800"
                height="1250"
                alt="Design Bites Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/design-bites/"
                data-modal
              ></a>
            </div>
          </div>
          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-matthew-taylor.jpg"
                width="800"
                height="1250"
                alt="Matthew Taylor Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/matthew-taylor/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-soda.jpg"
                width="800"
                height="1250"
                alt="Soda Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/soda/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-makai.jpg"
                width="800"
                height="1250"
                alt="Makai Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/makai"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-balou.jpg"
                width="800"
                height="1250"
                alt="Balou Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/balou/"
                data-modal
              ></a>
            </div>
          </div>

          <div>
            <div
              class="vds-inline tm-box-shadow-medium vds-transition-toggle"
              tabindex="0"
            >
              <img
                src="images/pro/layout-yoko.jpg"
                width="800"
                height="1250"
                alt="Yoko Home Layout"
                loading="lazy"
              />
              <a
                class="tm-overlay-default vds-position-cover vds-transition-fade"
                href="https://demo.yootheme.com/wordpress/themes/yoko/"
                data-modal
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="vds-section vds-section-primary tm-section-primary vds-section-xlarge vds-padding-remove-bottom"
    >
      <div class="vds-container vds-text-center">
        <h2 class="vds-h1">Get YOOtheme Pro</h2>
        <p class="vds-text-large tm-text-large vds-margin-medium-bottom">
          The all-in-one theme and page builder for WordPress &amp; Joomla
        </p>

        <div class="vds-grid-medium vds-flex-middle vds-flex-center" vds-grid>
          <div>
            <a
              class="vds-button vds-button-default vds-button-large tm-button-primary tm-button-large vds-visible@s"
              href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Buy+Top"
              >Buy Now</a
            >

            <a
              class="vds-button vds-button-default tm-button-primary vds-hidden@s"
              href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Buy+Bottom"
              >Buy Now</a
            >
          </div>
          <div>
            <a
              class="vds-button vds-button-text"
              href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Learn+Bottom"
              >Learn More</a
            >
          </div>
        </div>

        <hr class="vds-margin-remove-bottom vds-margin-xlarge-top" />

        <div class="vds-margin-top vds-margin-bottom">
          <div class="vds-child-width-auto@m vds-flex-middle" vds-grid>
            <div>
              <div class="vds-text-left@m vds-text-center">
                <a class="vds-logo" href="./index">
                  <canvas
                    class="vds-margin-small-right"
                    width="28"
                    height="34"
                    vds-svg
                    src="./images/vds-logo.svg"
                  ></canvas>
                  ViraDesignSystem
                </a>
              </div>
            </div>
            <div class="vds-margin-auto">
              <ul class="vds-subnav vds-flex-center" vds-margin>
                <router-link tag="li" to="pro">
                  <a>Pro</a>
                </router-link>
                <li><a href="docs">Documentation</a></li>
                <router-link tag="li" to="changelog">
                  <a>Changelog</a>
                </router-link>
                <router-link tag="li" to="download">
                  <a>Download</a>
                </router-link>
              </ul>
            </div>
            <div>
              <div class="vds-text-right@m vds-text-center">
                <div
                  class="vds-child-width-auto vds-grid-small vds-flex-center"
                  vds-grid
                >
                  <div>
                    <a
                      href="https://github.com/vds/vds"
                      class="vds-icon-link"
                      vds-icon="github"
                    ></a>
                  </div>
                  <div>
                    <a
                      href="https://discordapp.com/invite/NEt4Pv7"
                      class="vds-icon-link"
                      vds-icon="commenting"
                    ></a>
                  </div>
                  <div>
                    <a
                      href="https://twitter.com/getvds"
                      class="vds-icon-link"
                      vds-icon="twitter"
                    ></a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/getvds"
                      class="vds-icon-link"
                      vds-icon="facebook"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->

    <div
      id="modal-demo"
      ref="modal"
      class="vds-modal-full"
      vds-modal
      @hide="src = ''"
    >
      <div
        class="vds-modal-dialog tm-modal-dialog vds-flex vds-flex-column"
        vds-height-viewport
      >
        <button
          class="vds-modal-close-full tm-modal-close-full vds-close-large"
          type="button"
          vds-close
        ></button>
        <div class="tm-modal-header">
          <div class="vds-grid-medium vds-flex-middle" vds-grid>
            <div>
              <a
                class="vds-button vds-button-primary tm-button-primary vds-button-large tm-button-large vds-visible@s"
                href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Buy+Modal"
                >Buy YOOtheme Pro</a
              >

              <a
                class="vds-button vds-button-primary tm-button-primary vds-hidden@s"
                href="https://yootheme.com/signup/themes?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Buy+Modal"
                >Buy</a
              >
            </div>
            <div>
              <a
                class="vds-button vds-button-text"
                href="https://yootheme.com/pro?utm_campaign=YOOtheme+Pro&amp;utm_source=ViraDesignSystem&amp;utm_medium=referral&amp;utm_content=Learn+Modal"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="tm-modal-body vds-flex-1 vds-flex">
          <iframe :src="src" class="vds-width-1-1 tm-box-shadow-modal"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { modal } from "vds";
import { on } from "vds-util";

export default {
  data: () => ({
    src: "",
    imgLoaded: false,
  }),

  mounted() {
    on(this.$el, "click", "[data-modal]", (e) => {
      const { modal: modalEl } = this.$refs;

      e.preventDefault();

      const el = e.target;

      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        window.open(el.href);
        return;
      }

      modal(modalEl).show();
      this.src = el.href;
    });
  },
};
</script>
