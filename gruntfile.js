/**
 * Copyright 2013-2015 Fosys Interactive, SA
 * –––––––––––––––––––––––––––––––––––––––––
 *
 * SVG ICON BUILDER
 */

module.exports = function(grunt) {

    // tell Grunt we plan to use those plugins
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svgmin');

    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        svgstore: {
            options: {
                svg: { // will be added as attributes to the resulting SVG
                    'version' : "1.1",
                    'xmlns' : "http://www.w3.org/2000/svg",
                    'xmlns:xlink' : "http://www.w3.org/1999/xlink"
                },
                cleanup: ['fill','stroke'],
                cleanupdefs: true,
                inheritviewbox: true,
                preserveDescElement: false,
                includeTitleElement: false
            },
            default : {
                files: {
                    'dist/vds-icons.svg': [
                        'src/icons/*.svg'
                    ]
                },
            }
        },

        svgmin: {
            options: {
                plugins: [
                    { cleanupIDs: false },
                    { removeDesc: true },
                    { removeTitle: true },
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false },
                    { removeEmptyAttrs: true },
                    { removeComments: true },
                    { removeMetadata: true },
                    { removeEditorsNSData: true },
                    { removeEmptyAttrs: true },
                    { removeUnusedNS: true },
                    { removeEmptyText: true }
                ]
            },
            dist: {
                files: {
                    'dist/vds-icons.min.svg': 'dist/vds-icons.svg',
                }
            }
        }

    });


    // Creates the sprite by default when hitting 'grunt'
    grunt.registerTask('default', [
        'svgstore',
        'svgmin'
    ]);
};