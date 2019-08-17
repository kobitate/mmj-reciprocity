# How to Contribute

I wanted to created this site as a quick travel reference, as I found the 
existing resources related to MMJ reciprocity in the United States either 
inadequate or inaccurate. So, I want this site to be as accurate as possible.
With that in mind, I decided to make this an open source initiative.

## Data Corrections

If you're a developer, or simply happen to understand JSON, feel free to fork 
this repository and modify [`data.json`](https://gitlab.com/KaiTiggy/mmj-reciprocity/blob/master/src/data.json). 
Submit changes as a merge request and I'll do my best to get to them as soon as 
possible. 

Here's the format of the JSON data for each state:

```javascript
{
    // Typically won't need to be modified
    "name": "Alabama",
    "abbreviation": "AL",
    
    // The current status of Marijuana in the state
    "status": {
        "medical": false,
        "recreational": false,
        "reciprocity": false
    },
    
    // Details concerning the state's reciprocity program
    // - For example, if a state only accepts cards from select states, put this
    //   information here
    // - Please include links where possible
    "details": {
        "links": [],
        "info": []
    }
}
```

If you're not a developer, you can either email me, or [submit an issue](https://gitlab.com/KaiTiggy/mmj-reciprocity/issues/new)
right here on GitLab. Fill out the provided template and I will update the site 
as soon as possible.