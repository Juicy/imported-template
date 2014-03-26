// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            all: {
                options: {
                    livereload: true
                },
                files: [
                    '*.html',
                    'examples/**/*.html'
                ],
                // tasks: ['jshint'],
            },
        }
    });

};