# Dementia Clock

Nothing complicated just a web page containing:
* Day: Full day name
* Time as: 24 Hour HH:MM
* Date as: n Month YYYY

## Build and Deploy

```
git clone git@github.com:davidnewcomb/dementia-clock.git
cd dementia-clock
echo 'http://www.example/path/to/app' > .env
npm run build
scp -r build myuser@example.com:/var/www/vhost/example.com/httpsdocs/path/to/app
```

## Why?

People with dementia can wake up disorientated. Load the web page on a tablet and place next to the bed.

For more information Google "Dementia Clock"

