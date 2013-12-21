module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		harp: {
			server: {
				server: true,
				source: 'src'
			},
			dist: {
				source: 'src',
				dest: 'build'
			}
		},
		styleguide: {
			dist: {
				files: {
					'doc/styleguide': 'src/css/*.css'
				}
			}
		},
		watch: {
			styleguide: {
				files: ['src/css/*.css'],
				tasks: ['styleguide']
			}
		}
	});

	// Loard Tasks
	grunt.loadNpmTasks('grunt-harp');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-styleguide');

	// Register Tasks
	grunt.registerTask('default', ['harp']);
	grunt.registerTask('server', ['harp']);
	grunt.registerTask('watch', ['watch']);
};
