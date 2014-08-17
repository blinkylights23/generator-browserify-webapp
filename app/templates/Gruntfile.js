// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';


module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('config.json'),
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      stylus: {
        files: ['<%%= yeoman.app %>/styl/**/*.styl'],
        tasks: ['stylus:server', 'autoprefixer']
      },
      swigtemplates: {
        files: ['<%%= yeoman.app %>/swig/**/*.{swig,json,html,js}'],
        tasks: ['swigtemplates:server']
      },
      livereload: {
        options: {
          livereload: '<%%= connect.options.livereload %>'
        },
        files: [
          '<%%= yeoman.app %>/*.html',
          '<%%= yeoman.app %>/css/**/*.css',
          '<%%= yeoman.app %>/data/**/*.json',
          '<%%= yeoman.app %>/js/{,*/}*.js',
          '<%%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          options: {
            base: [
              '.tmp',
              'test',
              '<%%= yeoman.app %>'
            ]
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%%= yeoman.dist %>',
          livereload: false
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%%= yeoman.dist %>/*',
            '<%%= yeoman.app %>/css/*.css',
            '<%%= yeoman.app %>/*.html',
            '!<%%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        force: true
      },
      all: [
        'Gruntfile.js',
        '<%%= yeoman.app %>/js/{,*/}*.js',
        '!<%%= yeoman.app %>/js/vendor/*',
        '!<%%= yeoman.app %>/js/*bundle*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: false,
          log: true,
          logErrors: true,
          ignoreLeaks: true,
          reporter: 'Spec',
          urls: ['http://<%%= connect.test.options.hostname %>:<%%= connect.test.options.port %>/test/index.html']
        }
      }
    },
    jsbeautifier : {
      files: [
        'app/js/**/*.js',
        '!app/js/vendor/**'
      ],
      options: {
        // mode:'VERIFY_ONLY',
        dest: '.tmp/beautified/',
        js: {
          indentChar: ' ',
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          wrapLineLength: 0
        }
      }
    },
    removelogging: {
      options: {
        replaceWith: '0;'
      },
      dist: {
        src: [
          'dist/**/*.js'
        ]
      }
    },
    stylus: {
      server: {
        options: {
          paths: ['<%%= yeoman.app %>/styl/*.styl'],
          compress: false
        },
        expand: true,
        cwd: '<%%= yeoman.app %>/styl/',
        src: '*.styl',
        dest: '<%%= yeoman.app %>/css/',
        ext: '.css'
      },
      dist: {
        options: {
          paths: ['<%%= yeoman.app %>/styl/*.styl'],
        },
        expand: true,
        cwd: '<%%= yeoman.app %>/styl/',
        src: '*.styl',
        dest: 'app/css/',
        ext: '.css'
      }
    },
    uncss: {
      dist: {
        options: {
          stylesheets: ['<%%= yeoman.app %>/css/main.css']
        },
        files: {
          '<%%= yeoman.app %>/css/main.css': ['<%%= yeoman.app %>/*.html']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      dist: {
        files: [{
          expand: true,
          src: '<%%= yeoman.app %>/css/*.css'
        }]
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%%= yeoman.dist %>/js/{,*/}*.js',
            '<%%= yeoman.dist %>/css/{,*/}*.css',
            '<%%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '!<%%= yeoman.dist %>/img/fb-thumb*',
            '!<%%= yeoman.dist %>/**/*norev*',
            '!<%%= yeoman.dist %>/**/*no-rev*',
            '<%%= yeoman.dist %>/css/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%%= yeoman.dist %>'
      },
      html: [
        '<%= yeoman.app %>/index.html'
      ]
    },
    usemin: {
      options: {
        assetsDirs: ['<%%= yeoman.dist %>']
      },
      html: ['<%%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%%= yeoman.dist %>/styles/{,*/}*.css']
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/img',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%%= yeoman.dist %>/img'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/img',
          src: '{,*/}*.svg',
          dest: '<%%= yeoman.dist %>/img'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>',
          src: [
            'index.html'
          ],
          dest: '<%%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              'img/**',
              // 'data/**/*.json',
              'css/fonts/**'
            ]
          },
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist',
            dest: '<%= yeoman.dist %>',
            src: [
              'fonts/**'
            ]
          }
        ],
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: false,
        limit: 6
      },
      server: [
        'stylus:server'
      ],
      test: [],
      dist: [
        'stylus:dist',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    swigtemplates: {
      options: {
        templatesDir: '<%%= yeoman.app %>/swig'
      },
      server: {
        context: '<%%= config.server.options.variables %>',
        dest: '<%%= yeoman.app %>/',
        src: [
          '<%%= yeoman.app %>/swig/*.swig',
          '<%%= yeoman.app %>/swig/data/index-config.json.swig'
        ]
      },
      dist: {
        context: {
          dist: '<%%= grunt.config.get("dist") %>',
          target: '<%%= grunt.config.get("target") %>',
          debug: '<%%= grunt.config.get("debug") %>'
        },
        dest: '<%%= yeoman.app %>/',
        src: [
          '<%%= yeoman.app %>/swig/*.swig'
          // '<%%= yeoman.app %>/swig/data/index-config.json.swig'
        ]
      }
    },
    replace: {
      server: {},
      dist: {}
    },
    bower: {
      options: {
        exclude: ['modernizr']
      },
      all: {}
    },
    s3: {
      options: {
        cacheTTL: 0,
        headers: {
          CacheControl: 300
        },
        gzip: false
      },
      staging: {
        options: {
          bucket: '',
        },
        cwd: '<%%= yeoman.dist %>',
        src: '**'
      },
      production: {
        options: {
          bucket: '',
          gzip: true
        },
        cwd: '<%%= yeoman.dist %>',
        src: '**'
      }
    },
    browserify: {
      options: {
        external: [
          '<%%= yeoman.app %>/js/content.js:content'
        ]
      },
      content: {
        src: ['<%%= yeoman.app %>/js/content.js'],
        dest: '<%%= yeoman.app %>/js/content-bundle.js',
        options: {
          watch: true,
          alias: [
            '<%%= yeoman.app %>/js/content.js:content'
          ],
          external: null
        }
      },
      server: {
        options: {
          watch: true,
          bundleOptions: {
            debug: true
          }
        },
        src: [ '<%%= yeoman.app %>/js/index-app.js' ],
        dest: '<%%= yeoman.app %>/js/index-bundle.js'
      },
      dist: {
        src: [ '<%%= yeoman.app %>/js/index-app.js' ],
        dest: '<%%= yeoman.app %>/js/index-bundle.js'
      }
    }
  });

  grunt.registerTask('server', function(target) {
    if (target) {
      return grunt.task.run([
        'build:' + target,
        'connect:dist:keepalive'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'config:server',
      'swigtemplates:server',
      'concurrent:server',
      'autoprefixer',
      'browserify:content',
      'browserify:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'connect:test',
    // 'connect:test:keepalive',
    'mocha'
  ]);

  grunt.registerTask('build', function(target) {
    var allowedTargets = [
      'staging',
      'production'
    ];
    if (!target) {
      grunt.fail.fatal('Valid deployment targets: ' + allowedTargets.join(', '));
    }
    if (allowedTargets.indexOf(target) === -1) {
      grunt.fail.fatal(
        'Provided target: ' + target + ' is invalid. Valid deployment targets: ' + allowedTargets.join(', ')
      );
    }

    var tasks = [
      'clean:dist',
      'config:' + target,
      'useminPrepare',
      'swigtemplates:dist',
      'concurrent:dist',
      'autoprefixer',
      'browserify:content',
      'browserify:dist',
      'concat',
      'cssmin',
      'uglify',
      'copy:dist',
      'rev',
      'usemin'
    ];
    grunt.task.run(tasks);
  });

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('deploy', function(target) {
    var allowedTargets = [
      'staging',
      'production'
    ];
    if (!target) {
      grunt.fail.fatal('Valid deployment targets: ' + allowedTargets.join(', '));
    }
    if (allowedTargets.indexOf(target) === -1) {
      grunt.fail.fatal(
        'Provided target: ' + target + ' is invalid. Valid deployment targets: ' + allowedTargets.join(', ')
      );
    }

    grunt.log.ok(['Deploying to ' + target]);
    grunt.task.run([
      'config:' + target,
      'jshint',
      // 'test',
      'build:' + target,
      's3:' + target
    ]);
  });

};
