# Instalação do Node
** $ sudo apt install -y nodejs **

# Versão NodeJs
** $ node -v **

# Versão NPM
** $ npm -v **

# Instalação Angular CLI
** $ sudo npm install -g @angular/cli **

# Versão Angular
** $ ng version **

# Nova configuração e Curso
** $ ng new course-manager **

# Inicia a aplicação
** $ ng serve **

# Após finalizar a aplicação na próxima iniciação pode causar o erro (Error: ENOSPC: System limit for number of file watchers reached)
** $ sudo sysctl -w fs.inotify.max_user_watches=524288 **

# Instalar bootstrap
** $ npm install bootstrap **