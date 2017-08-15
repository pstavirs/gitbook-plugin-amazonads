# Amazon ads plugin for GitBook

Add it to the plugins array in book.json:

```
{
  "plugins": ["amazonads"]
}
```

You MUST set the following keys using the plugins configuration in book.json:

```
{
    "plugins": ["amazonads"],
    "pluginsConfig": {
      "amazonads": {
          "tracking_id": "XXXXXX",
          "title": "XXXXXX",
          "asins": "####, ####, ####, ####",
          "linkid": "XXXXX"
      }
    }
}
```
