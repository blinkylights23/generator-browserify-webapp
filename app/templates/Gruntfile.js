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
        tasks: ['swigtemplates']
      },
      browserify: {
        files: [
          '<%%= yeoman.app %>/js/**/*.js',
          '!<%%= yeoman.app %>/js/**/*bundle*'
        ],
        tasks: ['browserify:server']
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
        },
        expand: true,
        cwd: '<%%= yeoman.app %>/styl/',
        src: '*.styl',
        dest: '.tmp/css/',
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
          stylesheets: ['../.tmp/concat/css/main.css']
        },
        files: {
          '.tmp/concat/css/main.css': ['<%%= yeoman.dist %>/*.html']
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
            '<%%= yeoman.dist %>/css/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%%= yeoman.dist %>'
      },
      html: '<%%= yeoman.app %>/*.html'
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
          src: '*.html',
          dest: '<%%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= yeoman.app %>',
          dest: '<%%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            'img/**',
            'data/**',
            'css/fonts/**'
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%%= yeoman.app %>/css',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: false,
        limit: 6
      },
      server: [
        'stylus:server',
        'copy:styles',
        'autoprefixer',
        'swigtemplates:server',
        'browserify:server'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'stylus:dist',
        'copy:styles',
        'autoprefixer',
        'swigtemplates:dist',
        'browserify:dist',
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
        src: ['<%%= yeoman.app %>/swig/**/*.swig']
      },
      dist: {
        context: grunt.config,
        dest: '<%%= yeoman.app %>/',
        src: ['<%%= yeoman.app %>/swig/**/*.swig']
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
      demo: {
        options: {
          bucket: '',
        },
        cwd: '<%%= yeoman.dist %>',
        src: '**'
      },
      adops: {
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
      },
      server: {
        options: {
          bundleOptions: {
            debug: true
          }
        },
        src: [ '<%%= yeoman.app %>/js/index-app.js' ],
        dest: '<%%= yeoman.app %>/js/index-bundle.js'
      },
      dist: {
        src: [ '<%%= yeoman.app %>/js/index-app.js' ],
        dest: '<%%= yeoman.dist %>/js/index-bundle.js'
      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'config:server',
      'replace:server',
      'concurrent:server',
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
    var tasks = [
      'clean:dist',
      'useminPrepare',
      'concurrent:dist',
      'concat',
      'cssmin',
      'uglify',
      'copy:dist',
      'rev',
      'usemin'
    ];
    if (target) {
      tasks.splice(6, 0, 'replace:dist');
    }
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
      'demo',
      'adops',
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
      'test',
      'build:' + target,
      's3:' + target
    ]);
  });

};
