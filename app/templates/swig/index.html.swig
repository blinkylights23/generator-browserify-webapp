{% extends "base.html" %}


{% block javascript %}
    {% include "includes/jstemplates.html" %}
    <script src="js/index-bundle.js"></script>
{% endblock %}



{% block content %}

<div class="container">
    <section class="row">
        <div class="large-12 columns">

            <div data-bind="template: { name: 'pageTemplate', if: currentPage(), data: currentPage() }">
                Loading graphic
            </div>

        </div>
    </section>
</div>

{% endblock %}
