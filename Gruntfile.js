module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			html: {
				files: ['public/**/*.html', 'dev/js/start.js', 'dev/css/style.css', 'index.html', 'book/index.html', 'confirm/index.html'],
				options: {
					livereload: 35729
				}				
			},
			browserify: {
				files: ['dev/js/components/**/**/*.jsx', 'Gruntfile.js'],
				tasks: ['browserify']
			},
			sass: {
      			files: ['dev/css/**/*.scss'],
      			tasks: ['sass'],
      		}
		},
		browserify: {
			dist: {
				options: {
					transform: [
						[
							'babelify', 
							{
								presets: ['es2015', 'react']
							}
						]
					],
					alias: {
						'Title': './dev/js/components/desktop/home/Title.jsx',
						'Supporting': './dev/js/components/desktop/home/Supporting.jsx',
						'Locations': './dev/js/components/desktop/home/Locations.jsx',
						'States': './dev/js/components/desktop/home/States.jsx',
						'Store': './dev/js/components/desktop/home/Store.jsx',
						'CallToAction': './dev/js/components/desktop/home/CallToAction.jsx',
						'Primary': './dev/js/components/desktop/home/Primary.jsx',
						'CTA': './dev/js/components/desktop/confirm/CTA.jsx',
						'GoodBye': './dev/js/components/desktop/confirm/GoodBye.jsx',
						'Ads': './dev/js/components/desktop/confirm/Ads.jsx',
						'MobileCallToAction': './dev/js/components/mobile/home/MobileCallToAction.jsx',
						'MobileLocations': './dev/js/components/mobile/home/MobileLocations.jsx',
						'MobilePrimary': './dev/js/components/mobile/home/MobilePrimary.jsx',
						'MobileStates': './dev/js/components/mobile/home/MobileStates.jsx',
						'MobileStore': './dev/js/components/mobile/home/MobileStore.jsx',
						'MobileNavConfig': './dev/js/lib/MobileNavConfig.js',
						'MobileNavLoader': './dev/js/lib/MobileNavLoader.js',
						'MobileAds': './dev/js/components/mobile/confirm/MobileAds.jsx',
						'MobileCTA': './dev/js/components/mobile/confirm/MobileCTA.jsx',
						'MobileGoodBye': './dev/js/components/mobile/confirm/MobileGoodBye.jsx'
					},
					browserifyOptions: {
						standalone: 'registry'
					}
				},        
				src: ['dev/js/components/**/**/Main.jsx'],
				dest: 'dev/js/start.js',
			}
		},
		sass: {
			dist: {
				files: {
					'dev/css/style.css': 'dev/css/style.scss'
				}
			}
		},
		uglify: {
			// options: {
			// 	banner: '<%= banner %>\n'
			// },
			dist: {
				src: 'dev/js/start.js',
				dest: 'assets/js/start.min.js'
			}
		},
		cssmin: {
			compress: {
				// options: {
				// 	banner: '<%= banner %>'
				// },
				files: {
					'assets/css/style.min.css': ['dev/css/style.css']
				}
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3
				},
				files: {
					//'destination': 'source'
				}
			}
		},
		copy: {
			img: {
				cwd: 'dev',
				src: 'images/**',
				dest: 'assets/',
				expand: true
			},
			html: {
				expand: true,
				src: ['**/*.html', '!**/node_modules/**', '!**/dist/**'],
				dest: 'dist/public/',
				options:{
					process: function(content, srcpath){
						content = content.replace(/style\.css/g, 'style.min.css');
						content = content.replace('<script src="//localhost:35729/livereload.js"></script>', '');
						content = content.replace(/start\.js/g, 'start.min.js');
						content = content.replace(/\.\.\/dev/g, 'https://storage.googleapis.com/imp-projects/rabt/assets')
						return content;
					}
				},
				ext: '.hbs'
			},
			pkgJson: {
				src: 'package.json',
				dest: 'dist/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['browserify', 'sass', 'watch']);
	grunt.registerTask('cp', ['copy']);
	grunt.registerTask('bundle', ['browserify']);
	grunt.registerTask('css', 'sass');
	grunt.registerTask('build', ['cssmin', 'uglify', 'copy']);
};