(function() {
	module.exports = function(grunt) {

		grunt.initConfig({

			concat: {
				js: {
					src: [
						'src/js/libs/*.js',
						'src/js/plugins/*.js',
						'src/js/common.js'
					],
					dest: 'build/js/scripts.js'
				}
			},

			uglify: {
				js: {
					files: {
						'build/js/scripts.js': '<%= concat.js.src %>'
					}
				}
			},

			includereplace: {
				dist: {
					options: {
						prefix: '@@',
						suffix: ''
					},
					src: 'src/html/*.html',
					dest: 'build/html/'
				}
			},

			clean: {
				html: ['build/html'],
				htmlincludes: ['build/html/_*.html'],
				css: ['build/css'],
				img: ['build/img'],
				js: ['build/js'],
				fonts: ['build/fonts'],
				features: ['build/features'],
			},

			compass: {
				dev: {
					options: {
						httpGeneratedImagesPath: '../img/',
						sassDir: 'src/sass',
						cssDir: 'build/css',
						imagesDir: 'src/img',
                    	outputStyle: 'expanded'
					}
				},
				dist: {
					options: {
						httpGeneratedImagesPath: '../img/',
						sassDir: 'src/sass',
						cssDir: 'build/css',
						imagesDir: 'src/img',
                    	outputStyle: 'expanded',
						force: true
					}
				}
			},

			cssmin: {
				dist: {
					files: {
						'build/css/style.css': 'build/css/style.css',
						'build/css/rte.css': 'build/css/rte.css'
					}
				}
			},

			copy: {
				img: {
					files: [
						{ expand: true, cwd: "src/img/", src: ["**"], dest: "build/img" },
					]
				},
				html: {
					files: [
						{ expand: true, cwd: "src/html/", src: ["**"], dest: "build/html" },
					]
				},
				fonts: {
					files: [
						{ expand: true, cwd: "src/fonts/", src: ["**"], dest: "build/fonts" },
					]
				},
				features: {
					files: [
						{ expand: true, cwd: "src/features/", src: ["**"], dest: "build/features" },
					]
				},
				css: {
					files: [
						{ expand: true, cwd: "src/css/", src: ["**"], dest: "build/css" },
					]
				}
			},

			watch: {
				img: {
					files: ["src/img/**"],
					tasks: ['img']
				},
				html: {
					files: ["src/html/**"],
					tasks: ['html']
				},
				fonts: {
					files: ["src/fonts/**"],
					tasks: ['fonts']
				},
				features: {
					files: ["src/features/**"],
					tasks: ['features']
				},
				js: {
					files: ["src/js/**"],
					tasks: ['js']
				},
				css: {
					files: ["src/css/**"],
					tasks: ['css']
				}
			}

		});

		require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

		grunt.registerTask('html',		['clean:html', 'includereplace', 'clean:htmlincludes']);
		grunt.registerTask('css', 		['clean:css', 'compass:dev', 'img']);
		grunt.registerTask('css-dist',	['clean:css', 'compass:dist', 'cssmin', 'img']);
		grunt.registerTask('fonts',		['clean:fonts', 'copy:fonts']);
		grunt.registerTask('img',		['clean:img', 'copy:img']);
		grunt.registerTask('js',		['clean:js', 'concat:js']);
		grunt.registerTask('js-dist',	['clean:js', 'uglify']);
		grunt.registerTask('features',	['clean:features', 'copy:features']);

		grunt.registerTask('dev', ['html', 'css', 'fonts', 'img', 'js', 'features']);
		grunt.registerTask('dist', ['html', 'css-dist', 'fonts', 'img', 'js-dist', 'features']);
		grunt.registerTask('default', ['dist']);

	};

}).call(this);
