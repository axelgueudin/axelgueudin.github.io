{% if page.url == "/" %}

<div class="container is-fluid">
    <div class="columns is-multiline">
        <div class="column is-12">
            <div class="columns is-multiline">
            {% for project in site.projects reversed %}
                <div class="column is-10-desktop is-10-tablet m-4">
                    <section class="mb-2">
                        <div class="columns is-desktop">
                            <div class="column is-four-fifths-desktop">
                                <a class="title is-size-3-mobile is-size-2-touch" title="{{ project.title }}" href="{{ project.url }}">{{ project.name }}
                                </a>
                            </div>  
                            <div id="project-date-container" class="column"> <h4 id="project-date" class="project-date">{{project.tag | split: " " | first}} {{project.date | date: "%Y"}}</h4>
                            </div>
                        </div>
                        <a class="is-block image is-2by1" title="{{ project.title }}" href="{{ project.url }}">
                            <div class="" ><img src="{{ project.preview }}" alt="{{ project.name }}" class="project-preview">
                            </div>
                        </a>
                        <div class="columns my-4">
                            <div class="column is-four-fifths">{{ project.brief }}</div>
                            <div id="project-url-container" class="column info">
                                <a id="project-url" class="" href="{{ project.url }}">Open project</a>
                            </div>   
                        </div>
                    </section>
                </div>
            {% endfor %}
            </div>
        </div>
    </div>
</div>

{% else %}

<div class="container is-fluid pt-6">
    <div class="columns is-multiline thumbnails">
        <div class="column is-12">
            <div class="columns is-multiline">
            {% for project in site.projects reversed %}
                <div class="column is-4-desktop is-6-tablet gallery">
                    <section class="thumbnail mb-2">
                        <h4 class="project-date has-text-right">{{project.date | date: "%Y"}}, {{project.tag}}</h4>
                        <a class="is-block image is-square" title="{{ project.title }}" href="{{ project.url }}">
                            <div class="" ><img src="{{ project.preview }}" alt="{{ project.title }}" class="project-preview"></div>
                            <div class="title is-size-3-mobile is-size-2-touch"><span>{{ project.title }}</span></div>
                        </a>
                        <div>
                            <a class="project-title" title="{{ project.title }}" href="{{ project.url }}"><i class="lni lni-arrow-right inline-icon"></i> {{ project.title }}
                            </a>
                        </div>
                    </section>
                </div>
            {% endfor %}
            </div>
        </div>
    </div>
</div>

{% endif %}