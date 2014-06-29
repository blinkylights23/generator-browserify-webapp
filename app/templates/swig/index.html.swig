{% extends "base.html" %}


{% block require %}
{% if !production %}
<script src="bower_components/requirejs/require.js"></script>
<script src="js/config.js"></script>
{% endif %}
<script src="js/index-main.js"></script>
{% endblock %}



{% block content %}


<section class="row">
    <div class="large-12 columns">

        Index.html

    </div>
</section>


{% endblock %}
