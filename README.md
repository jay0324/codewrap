# codewrap
wrap your code and show in the page easier

# example
[Codepen example](https://codepen.io/jayh0324/pen/qBxdbeg)
[Demo example](https://jay0324.github.io/codewrap/)

# how to use
Just use files in dist folder as below:
```
<html>
<head>
.
.
.
<link rel="stylesheet" href="{your_local_path}/codewrap.min.css">
</head>
<body>
.
<textarea class="set_class">
...
...code...

...</textarea>
.
<script src="{jquery}" />
<script src="{your_local_path}/codewrap.min.js" />
<script>
$(function(){
    $("set_class").codewrap();
});
</script>
</body>
</html>
```