
	      ____                  __          ____
	     / __ \____  _____ ____/ /_  ____  / / /_
	    / /_/ / __ `/ ___/ ___/ __ \/ __ \/ / __/
	   / ____/ /_/ (__  |__  ) /_/ / /_/ / / /_
	  /_/    \__,_/____/____/_,___/\____/_/\__/
	
	The open-source password management solution for teams
	(c) 2021 Passbolt SA
	https://www.passbolt.com


## License

The source code is distributed under the [Affero General Public License v3](http://www.gnu.org/licenses/agpl-3.0.html)
The text is distributed under [Creative Common BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## About Passbolt career site

This repository contains the code used for the job section of passbolt website.
Find out more about passbolt here:
[https://careers.passbolt.com](https://carreer.passbolt.com "Careers at Passbolt")

### Quick start
This site is developed using Jekyll.
To get started please read Jekyll [quick start guide](https://jekyllrb.com/docs/quickstart/).

```
gem install jekyll bundler
git clone https://github.com/passbolt/passbolt_help.git
cd passbolt_help
bundle exec jekyll build
```

### Editing the look and feel
The main stylesheet is the same than the help site, which in turn depends on [passbolt styleguide](https://github.com/passbolt/passbolt_styleguide)
You can add custom additional code in `careers.css` in the `assets` section.

### Adding images
Similarly if you want to add images to this site make sure you do not include them in assets folders that are
reserved by the styleguide such as `/assets/img/screenshots` or `/assets/img/logo`.
Instead you can place them in `/assets/img/careers`.

## Credits

https://www.passbolt.com/credits
