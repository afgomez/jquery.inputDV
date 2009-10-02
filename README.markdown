jQuery.inputDV
==============

jQuery.inputDV is a jQuery plugin that allows you to set a default visible value to your inputs.
* When the user focuses on your input, deletess the default value so her doesn't need to select the text and delete it.
* If the input is left blank, the default value reappears.
* If the user write something, her data take precedence.

Using jQuery.inputDV
--------------------

    $(selector).inputDV([options])

There are two ways of setting the default value.

1. Implicit, on the &lt;input /&gt; tag.
    
        <input id="input" type="text" value="default value" />
        <script type="text/javascript" charset="utf-8">   
            $('#input').inputDV();
        </script>
    
2. Explicit, passed as param to the plugin.

        <input id="input" type="text" />
        <script type="text/javascript" charset="utf-8">
            $('#input').inputDV({ value: 'Default value' })
        </script>

The plugin establishes class="default" on the input tag. When the user interacts this class is removed.

You can specify your own class name with a param.
    
    $(selector).inputDV({ default_class: 'my_own_class_name' })


    