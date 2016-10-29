module.exports = function (grunt) {
	var DOC_DIR = 'doc',
		SRC_DIR = 'src',
		TEST_DIR = 'test',
		BUILD_DIR = 'build',
        TASKS_DIR = 'tasks';

	grunt.initConfig({
		watch: {
			sources: {
				files: [
					SRC_DIR + '/**/*.*',
					TEST_DIR + '/**/*.*'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			}
		},
		jshint: {
			dev: {
				options: {
					jshintrc: TASKS_DIR +'/.jshintrc'
				},
				src: [
					SRC_DIR + '/**/*.js'
				]
			}
		},
		jsdoc: {
			dist: {
				src: ['src/**/*.js'],
				dest: DOC_DIR
			}
		},
		clean: {
			doc: [DOC_DIR],
			build: [BUILD_DIR],
			test: [TEST_DIR + '/test.js']
		},
		jasmine: {
			dev: {
				options: {
					polyfills: [],
					vendor: [
						'./node_modules/systemjs/dist/system.js'
					],
					helpers: [],
					keepRunner: false,
					outfile: TEST_DIR + '/test.html',
					specs: [TEST_DIR + '/test.js']
				}
			}
		},
		targethtml: {
			build: {
				files: (function() {
					var config = {};
					config[BUILD_DIR + '/index.html'] = SRC_DIR + '/index.html'
					return config;
				}())
			}
		},
		systemjs: {
			build: {
				src: SRC_DIR + '/index.js',
				dest: BUILD_DIR + '/build.js',
				options: {
					baseURL: SRC_DIR,
					type: 'sfx', //sfx, bundle
					format: 'global',
					minify: true,
					mangle: true,
					sourceMaps: true
				}
			},
			test: {
				src: TEST_DIR + '/spec.js',
				dest: TEST_DIR + '/test.js',
				options: {
					baseURL: './',
					type: 'sfx', //sfx, bundle
					format: 'global'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-targethtml');
	grunt.loadTasks(TASKS_DIR + '/grunt-systemjs-bundler/tasks');

	grunt.registerTask('live', ['watch']);
	grunt.registerTask('code', ['jshint:dev']);
	grunt.registerTask('doc', ['clean:doc', 'jsdoc']);
	grunt.registerTask('test', ['systemjs:test', 'jasmine', 'clean:test']);
	grunt.registerTask('build', ['clean:build', 'systemjs:build', 'targethtml:build']);
};