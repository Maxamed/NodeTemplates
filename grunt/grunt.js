/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    }, 
    uglify: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:dist/common.min.js>'],
        dest: 'dist/jsfile.ugly.js'
      }
    } ,
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:../lib/jquery.js>', '<file_strip_banner:../lib/underscore.js>'],
        dest: 'dist/jsfile.concat.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:dist/jsfile.concat.js>'],
        dest: 'dist/jsfile.min.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'concat min');

};
