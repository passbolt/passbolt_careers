/**
 * Gruntfile
 * Provides tasks and commands to build and distribute the project
 *
 * @param grunt
 * @copyright (c) 2017 Passbolt SARL
 * @licence GNU Affero General Public License http://www.gnu.org/licenses/agpl-3.0.en.html
 */
module.exports = function(grunt) {

  /**
   * Path shortcuts
   */
  var path = {
    node_modules: 'node_modules/',
    assets: 'assets/',
    css: 'assets/css/',
    images: 'assets/img/',
    fonts: 'assets/fonts/'
  };

  /**
   * Import package.json file content
   */
  var pkg = grunt.file.readJSON('package.json');

  /**
   * Load and enable Tasks
   */
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['styleguide-update']);
  grunt.registerTask('styleguide-update', ['copy:styleguide']);

  /**
   * Main grunt tasks configuration
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Copy operations
     */
    copy: {
      // Copy styleguide elements
      styleguide: {
        files: [{
          // Icons
          nonull: true,
          cwd: path.node_modules + 'passbolt-styleguide/src/img/logo',
          src: ['logo.png', 'logo@2x.png', 'logo.svg'],
          dest: path.images + 'logo',
          expand: true
        }, {
          // CSS files
          cwd: path.node_modules + 'passbolt-styleguide/build/css',
          src: ['help.min.css'],
          dest: path.css,
          expand: true
        }, {
          // Font files
          cwd: path.node_modules + 'passbolt-styleguide/src/fonts',
          src: '*',
          dest: path.fonts,
          expand: true
        }, {
          // Icon
          cwd: path.node_modules + 'passbolt-styleguide/src/img/webroot',
          src: 'favicon.ico',
          dest: path.assets,
          expand: true
        }]
      }
    }

  });
};
