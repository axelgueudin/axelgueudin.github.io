---
layout: default
---
<div class="container is-fluid mb-6">
    <img src="{{ page.preview }}" class="banner" alt="Project cover"/> 
    <div class="block">
    {% if page.description == blank %}
        <div class="columns">
          <div class="column">
            {% if page.title.size > 12 %}
             <h1 class="title no-wrap is-size-3-mobile is-size-2-touch">{{ page.title }}</h1>
            {% else %}
             <h1 class="title is-size-3-mobile is-size-2-touch">{{ page.title }}</h1>
            {% endif %}
            <p class="project-date">{{ page.date | date: '%Y' }}, {{ page.tag }}</p>
          </div>
        </div>
    {% else %}
    <div class="columns">
          <div class="column is-one-third">
            <h1 class="title is-size-3-mobile is-size-2-touch">{{ page.title }}</h1>
            <p class="project-date">{{ page.date | date: '%Y' }}, {{ page.tag }}</p>
          </div>
          <div class="column is-offset-2 ">
            <div class="description">{{ page.description | markdownify }}</div> 
          </div>
        </div>
    {% endif %}
    </div>
    <div class="container is-fluid block">
        <div class="content">
      {{ page.content }}
        </div>
    </div>
</div>

{% include work_preview.md %}