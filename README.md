# demiportfolio
demiportfolio repo is used to power up [demigorrgon.design](http://demigorrgon.design/portfolio/)

Portfolio itself is a VueJS app. It includes projects in every endpoint named after the project name like [demigorrgon.design/portfolio/](http://demigorrgon.design/portfolio/) or [demigorrgon.design/ijra](http://demigorrgon.design/ijra)

Under the hood there are docker containers for every single included project and portfolio itself. Containers are connected with docker-compose, slapped nginx container on top of it, with it's config in 'docker' folder of the repo. 

For now projects are copypasted into portfolio repo for easier nginx configuration.
