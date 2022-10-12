# CSRF-Research

## What is CSRF?

## What does an attack look like?

## Solution(s) to CSRF vulnerability?

Csrf attacks can be countered in multiple ways:

[1. Token Synchronization](#token-synchronization)

[2. Double Submitting Cookies](#double-submitting-cookies)

[3. Adding User Interaction](#adding-user-interaction)

### Token Synchronization

Token synchronization works by letting the backend generate a token per request or session, the frontend than gets this token and sends this token with the request.
Per request is safer than per session, because this leaves a smaller time gap for the attack to execute his own request. 
The backend than checks if the frontend token is the same as the generated token. 
And if the tokens match it will process the rest of your request otherwise it will stop the request and return a csrf error.

The tokens must be secret, unique per user session and unpredictable. 
The attacker can't send a valid request to the backend, because the attacker doesnt know the token.


### Double Submitting Cookies

The method works by letting the frontend generate a long random token and adding the session identifier to this before doing a request. This token will be added to a cookie, and will also be send with the request. 
The backend only allows requests where the cookie token has the same value as the token that got send with the request. You can secure this even more by encrypting the cookie, and decrypting it in the backend. Another way to secure it is by using HMAC-based cookies, HMAC stands for hash based message authentication code.

The double submitting cookie method is a very easy to implement method. 
This method is also stateless so you can easily combine it with front-ends like react.

### Adding User Interaction

This method works by adding some kind of user interation before doing a request. This user interaction could be something like a ReCaptcha. 
Adding a Recaptcha is a very safe way to protect against csrf, but will ruin some of the user-experience.
That is why it is best to use this kind of method with important requests, like transferring money. 
 
## How to implement CSRF protection?


