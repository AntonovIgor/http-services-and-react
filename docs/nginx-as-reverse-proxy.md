 # nginx  в роли reverse proxy

Для бесшовного взаимодействия с опубликованными HTTP-сервисами удобно использовать nginx. В этом случае вам не потребуется создавать отдельную прослойку на PHP/node.js/что-то еще. 

Веб-сервер nginx будет принимать запросы от фронтенда и перенаправлять их в 1С (Apache/IIS),предварительно дополнив заголовками для авторизации. Логин и пароль пользователя для входа в 1С вы прописываете в последней строке конфигурационного файла (proxy_set_header Authorization). Логин и пароль передварительно переводтся в base 64.

## Пример конфигурационного файла

 ```
 # Все запрос к api
 location /api {
         
         # Перенаправление запросов на опубливанный HTTP-серивис
         # Если сервисы опубликованы http://127.0.0.1:9090/test/hs, то
         # конфигурация proxy_pass будет такой:
         proxy_pass http://127.0.0.1:9090/test/hs/;
         
         proxy_set_header Host $host;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Real-IP $remote_addr;
         
         # IP адрес сервера с фронтом         
         set_real_ip_from 212.92.98.195;
         real_ip_header X-Real-IP;
         
         # Аутентификация в 1С:Предпиятие. Логин и пароль (base 64)
         proxy_set_header Authorization "Basic Lm19ib9Q2MT34zNDU2";
}
```