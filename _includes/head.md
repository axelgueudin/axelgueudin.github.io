<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title> {% if page.title == "Home" %}
        {{ site.title }}
      {% else %}
        {{ page.title }} | {{ site.title }}
      {% endif %}</title>
<meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">

<link rel="stylesheet" href="{{ 'assets/css/main.css' | absolute_url }}">
<link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />

<!-- Icons -->
<link rel="icon" type="image/png" sizes="32x32" href="{{ 'assets/favicon/favicon-32x32.png' | absolute_url }}">
<link rel="manifest" href="{{ 'assets/favicon/manifest.json' | absolute_url }}">