const grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.initConfig({
  sass: {
    dist: {
      files: {
        'dist/vds.css': 'src/vds.scss'
      }
    }
  }
});

grunt.registerTask('default', ['sass']);