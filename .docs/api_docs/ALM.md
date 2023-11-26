## 1. Auth (Login):

**ENDPOINT** POST {ALM}/qcbin/rest/oauth2/login

 **** Request ****
POST /qcbin/rest/oauth2/login
Content-Type: application/json

{"clientId":"oauth2-wySfthjk8uGi4Kdj4DFH@MyCompany.com", "secret":"etUgyeKdMvftoO8dI3CW"}

**** Response ****
HTTP/1.1 200 OK
X-Content-Type-Options: nosniff
Expires: Thu, 01 Jan 1970 00:00:00 GMT
X-XSS-protection: 1; mode=block
Content-Length: 0
Proxy-Connection: Keep-Alive
Connection: Keep-Alive
Set-Cookie: JSESSIONID=node0ogi55m0mqjaw1d8g9luuilek08.node0; Path=/qcbin; HttpOnly
Set-Cookie: LWSSO_COOKIE_KEY=s8EFty2R4BhawGRbaJD9Dg-J9Q_oeRx7z9c7XSI1kGsrQsrG64c9HT9MU-
ETbdW45W8XSvVJkeJLPqy7ZrwvNoYVOnN_ew0qMf9VhiHOUbYGfkQ0ohLQgDCpGP8D9kSW8t0lZx0tpmIsKPaORtIBoGyh6XfRcmTDH-l-
u4x89QNCfX9jzvSGLq7flHXJJWwM8JBPsbhdYtp6oanWcBLLfobGBsMG8tlwD2vi7xjVIPH1zlW7xsef_4c7CcfnzxYH9nMOJitl1KGNeECLBI106g..; 
Path=/qcbin; HttpOnly
Set-Cookie: QCSession=MjU0NTM7Uzc4NHJjejh6UG1ibHNVdFo3Z21OdyoqO1JFU1QgY2xpZW50OyA7IDthcGlrZXktbW5qcGdlZmZhb2JlcW1xaW10bHA.; 
Path=/qcbin; HttpOnly
Set-Cookie: ALM_USER=4cf6829aa93728e8f3c97df913fb1bfa95fe5810e2933a05943f8312a98d9cf2; Path=/qcbin
Set-Cookie: XSRF-TOKEN=b6aef0f00d9f7e518f89f46940e49ec78143356f4dccf584ee51cddf54436e97; Path=/qcbin

(USE HTTPS FOR ENCRYPTED TX)

https://admhelp.microfocus.com/alm/api_refs/REST_core/Content/REST_API_Core/General/Session_Management.html
**AWAIT THE RESPONSE CONTAINING THE QCSession Cookie**

## 2. SESSION
If session > 60minutes it is ended but a PUT call will terminate it.

**ENDPOINT** POST /qcbin/rest/site-session
Cookie: LWSSO_COOKIE_KEY={cookie}; Path=/

## 3. Logout
/qcbin/authentication-point/logout

Set-Cookie: QCSession=""; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/






